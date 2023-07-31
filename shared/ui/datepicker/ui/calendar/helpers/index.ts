import React from 'react';
import { CreateDateParams, UseCalendarParams, CreateMonthParams } from '../types';

export const getWeekNumber = (date: Date) => {
    const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfTheYear.getTime()) / 86400000;

    return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7);
};

export const createDate = (params?: CreateDateParams) => {
    const locale = params?.locale ?? 'default';

    const d = params?.date ?? new Date();
    const dayNumber = d.getDate();
    const day = d.toLocaleDateString(locale, { weekday: 'long' });
    const dayNumberInWeek = d.getDay() + 1;
    const dayShort = d.toLocaleDateString(locale, { weekday: 'short' });
    const year = d.getFullYear();
    const yearShort = d.toLocaleDateString(locale, { year: '2-digit' });
    const month = d.toLocaleDateString(locale, { month: 'long' });
    const monthShort = d.toLocaleDateString(locale, { month: 'short' });
    const monthNumber = d.getMonth() + 1;
    const monthIndex = d.getMonth();
    const timestamp = d.getTime();
    const week = getWeekNumber(d);

    return {
        date: d,
        dayNumber,
        day,
        dayNumberInWeek,
        dayShort,
        year,
        yearShort,
        month,
        monthShort,
        monthNumber,
        monthIndex,
        timestamp,
        week
    };
};

export const getMonthesNames = (locale: string = 'defalut') => {
    const monthesNames: {
        month: ReturnType<typeof createDate>['month'];
        monthShort: ReturnType<typeof createDate>['monthShort'];
        monthIndex: ReturnType<typeof createDate>['monthIndex'];
        date: ReturnType<typeof createDate>['date'];
    }[] = Array.from({ length: 12 });

    const d = new Date();

    monthesNames.forEach((_, i) => {
        const { month, monthIndex, monthShort, date } = createDate({
            locale,
            date: new Date(d.getFullYear(), d.getMonth() + i, 1)
        });

        monthesNames[monthIndex] = { month, monthIndex, monthShort, date };
    });

    return monthesNames;
};

export const getWeekDaysNames = (firstWeekDay: number = 4, locale: string = 'default') => {
    const weekDaysNames: {
        day: ReturnType<typeof createDate>['day'];
        dayShort: ReturnType<typeof createDate>['dayShort'];
    }[] = Array.from({ length: 7 });

    const date = new Date();

    weekDaysNames.forEach((_, i) => {
        const { day, dayNumberInWeek, dayShort } = createDate({
            locale,
            date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
        });

        weekDaysNames[dayNumberInWeek - 1] = { day, dayShort };
    });

    return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)];
};

export const getMonthNumberOfDays = (
    monthIndex: number,
    yearNumber: number = new Date().getFullYear()
) => new Date(yearNumber, monthIndex + 1, 0).getDate();

export const createMonth = (params?: CreateMonthParams) => {
    const date = params?.date ?? new Date();
    const locale = params?.locale ?? 'default';

    const d = createDate({ date, locale });
    const { month: monthName, year, monthNumber, monthIndex } = d;

    const getDay = (dayNumber: number) =>
        createDate({ date: new Date(year, monthIndex, dayNumber), locale });

    const createMonthDays = () => {
        const days = [];

        for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i += 1) {
            days[i] = getDay(i + 1);
        }

        return days;
    };

    return {
        getDay,
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDays
    };
};


const DAYS_IN_WEEK = 7;

const getYearsInterval = (year: number) => {
    const startYear = Math.floor(year / 10) * 10;
    return [...Array(10)].map((_, index) => startYear + index);
};

export const useCalendar = ({
    locale = 'default',
    selectedDate: date,
    firstWeekDayNumber = 2
}: UseCalendarParams) => {
    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');
    const [selectedDay, setSelectedDay] = React.useState(createDate({ date }));
    const [selectedMonth, setSelectedMonth] = React.useState(
        createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale })
    );
    const [selectedYear, setSelectedYear] = React.useState(selectedDay.year);
    const [selectedYearsInterval, setSelectedYearsInterval] = React.useState(
        getYearsInterval(selectedDay.year)
    );

    const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
    const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDayNumber, locale), []);

    const days = React.useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);

    const calendarDays = React.useMemo(() => {
        const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);

        const prevMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex - 1),
            locale
        }).createMonthDays();

        const nextMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex + 1),
            locale
        }).createMonthDays();

        const firstDay = days[0];
        const lastDay = days[monthNumberOfDays - 1];

        const shiftIndex = firstWeekDayNumber - 1;
        const numberOfPrevDays =
            firstDay.dayNumberInWeek - 1 - shiftIndex < 0
                ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
                : firstDay.dayNumberInWeek - 1 - shiftIndex;

        const numberOfNextDays =
            DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
                ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
                : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;

        const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

        const result = [];

        for (let i = 0; i < numberOfPrevDays; i += 1) {
            const inverted = numberOfPrevDays - i;
            result[i] = prevMonthDays[prevMonthDays.length - inverted];
        }

        for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
            result[i] = days[i - numberOfPrevDays];
        }

        for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
            result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
        }

        return result;
    }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

    const onClickArrow = (direction: 'right' | 'left') => {
        if (mode === 'years' && direction === 'left') {
            return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] - 10));
        }

        if (mode === 'years' && direction === 'right') {
            return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] + 10));
        }

        if (mode === 'monthes' && direction === 'left') {
            const year = selectedYear - 1;
            if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
            return setSelectedYear(selectedYear - 1);
        }

        if (mode === 'monthes' && direction === 'right') {
            const year = selectedYear + 1;
            if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
            return setSelectedYear(selectedYear + 1);
        }

        if (mode === 'days') {
            const monthIndex =
                direction === 'left' ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
            if (monthIndex === -1) {
                const year = selectedYear - 1;
                setSelectedYear(year);
                if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
                return setSelectedMonth(createMonth({ date: new Date(selectedYear - 1, 11), locale }));
            }

            if (monthIndex === 12) {
                const year = selectedYear + 1;
                setSelectedYear(year);
                if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
                return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
            }

            setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
        }
    };

    const setSelectedMonthByIndex = (monthIndex: number) => {
        setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
    };

    return {
        state: {
            mode,
            calendarDays,
            weekDaysNames,
            monthesNames,
            selectedDay,
            selectedMonth,
            selectedYear,
            selectedYearsInterval
        },
        functions: {
            onClickArrow,
            setMode,
            setSelectedDay,
            setSelectedMonthByIndex,
            setSelectedYear,
            setSelectedYearsInterval
        }
    };
};

export const checkDateIsEqual = (date1: Date, date2: Date) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

export const checkIsToday = (date: Date) => {
    const today = new Date();

    return checkDateIsEqual(today, date);
};