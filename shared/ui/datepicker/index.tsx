import { FC, useState } from 'react';
import './style.scss';
import Image from 'next/image';

const DatePicker: FC<DatePicker> = ({ className }) => {
  const today = new Date();

  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const [date, setDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDay(e.target.value);
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMonth(e.target.value);
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value);

  return (
    <div className={`date-picker ${className}`}>
      <input
        className='date-picker__input'
        type='date'
        onFocus={toggleCalendar}
        onBlur={toggleCalendar}
      />
      <p className='date-picker__format-date'>
        <input
          className='date-picker__input-date date-picker__input-date_day'
          value={day}
          type='number'
          maxLength={2}
          placeholder='ДД'
          onChange={handleDayChange}
        />
        <span className='date-picker__dot'>.</span>
        <input
          className='date-picker__input-date date-picker__input-date_month'
          value={month}
          type='number'
          maxLength={2}
          placeholder='ММ'
          onChange={handleMonthChange}
        />
        <span className='date-picker__dot'>.</span>
        <input
          className='date-picker__input-date date-picker__input-date_full'
          value={year}
          type='number'
          max={today.getFullYear()}
          maxLength={4}
          placeholder='ГГГГ'
          onChange={handleYearChange}
        />
      </p>
      <Image
        src='/accordion.svg'
        alt='accordion'
        width={12}
        className='date-picker__image'
        onClick={toggleCalendar}
        height={12}
      />
      {showCalendar && (
        <ul>
          <li>пвавп</li>
        </ul>
      )}
    </div>
  );
};

export default DatePicker;
