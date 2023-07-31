import { ButtonGroups } from '@/shared/ui/select';
import {
  checkDateIsEqual,
  checkIsToday,
  createDate,
  useCalendar,
} from './helpers';
import './style.scss';
import { CalendarProps } from './types';

export const Calendar: React.FC<CalendarProps> = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
  onApply = () => {},
  onClear = () => {},
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  const handleModeChangeToMonth = () => functions.setMode('monthes');
  const handleModeChangeToYear = () => functions.setMode('years');
  const handleClickArrowRight = () => functions.onClickArrow('right');
  const handleClickArrowLeft = () => functions.onClickArrow('left');

  const handleApply = () => {
    console.log('apply date', date);
    onApply(date);
    onClear();
  };
  const handleClear = () => {
    const day = createDate();
    functions.setSelectedDay(day);
    onApply(day.date);
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <div
          aria-hidden
          className='calendar__header__arrow__left'
          onClick={handleClickArrowLeft}
        />
        {state.mode === 'days' && (
          <div
            aria-hidden
            className='calendar__header__title'
            onClick={handleModeChangeToMonth}
          >
            {state.monthesNames[state.selectedMonth.monthIndex].month}{' '}
            {state.selectedYear}
          </div>
        )}
        {state.mode === 'monthes' && (
          <div
            aria-hidden
            onClick={handleModeChangeToYear}
          >
            {state.selectedYear}
          </div>
        )}
        {state.mode === 'years' && (
          <div>
            {state.selectedYearsInterval[0]} -{' '}
            {
              state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ]
            }
          </div>
        )}
        <div
          aria-hidden
          className='calendar__header__arrow__right'
          onClick={handleClickArrowRight}
        />
      </div>
      <div className='calendar__body'>
        {state.mode === 'days' && (
          <>
            <div className='calendar__week__names'>
              {state.weekDaysNames.map(weekDaysName => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className='calendar__days'>
              {state.calendarDays.map(day => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day);
                      selectDate(day.date);
                    }}
                    className={[
                      'calendar__day',
                      isToday ? 'calendar__today__item' : '',
                      isSelectedDay ? 'calendar__selected__item' : '',
                      isAdditionalDay ? 'calendar__additional__day' : '',
                    ].join(' ')}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
            <ButtonGroups
              onClear={handleClear}
              onApply={handleApply}
            />
          </>
        )}

        {state.mode === 'monthes' && (
          <div className='calendar__pick__items__container'>
            {state.monthesNames.map(monthesName => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear();
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex;

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex);
                    functions.setMode('days');
                  }}
                  className={[
                    'calendar__pick__item',
                    isSelectedMonth ? 'calendar__selected__item' : '',
                    isCurrentMonth ? 'calendar__today__item' : '',
                  ].join(' ')}
                >
                  {monthesName.monthShort}
                </div>
              );
            })}
          </div>
        )}

        {state.mode === 'years' && (
          <div className='calendar__pick__items__container'>
            <div className='calendar__unchoosable__year'>
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map(year => {
              const isCurrentYear = new Date().getFullYear() === year;
              const isSelectedYear = year === state.selectedYear;

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year);
                    functions.setMode('monthes');
                  }}
                  className={[
                    'calendar__pick__item',
                    isCurrentYear ? 'calendar__today__item' : '',
                    isSelectedYear ? 'calendar__selected__item' : '',
                  ].join(' ')}
                >
                  {year}
                </div>
              );
            })}
            <div className='calendar__unchoosable__year'>
              {state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
