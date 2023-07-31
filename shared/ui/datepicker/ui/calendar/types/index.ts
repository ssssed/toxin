export interface CreateDateParams {
    locale?: string;
    date?: Date;
}

export interface CreateMonthParams {
    date?: Date;
    locale?: string;
}

export interface UseCalendarParams {
    locale?: string;
    selectedDate: Date;
    firstWeekDayNumber?: number;
}

export interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDayNumber?: number;
    onApply?: (date: Date) => void;
    onClear?: () => void;
}