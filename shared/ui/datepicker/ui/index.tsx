import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import type { DatePickerType } from '../types';

import { Calendar } from './calendar';
import './style.scss';

export const DatePicker: FC<DatePickerType> = ({ className }) => {
	const [selectedDate, setSelectedDay] = useState(new Date());
	const today = new Date();

	const [day, setDay] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');

	const [showCalendar, setShowCalendar] = useState(false);

	const toggleCalendar = () => {
		setShowCalendar(!showCalendar);
	};

	interface IValidate<T = string> {
		condition: boolean;
		value: T;
		action: (value: T) => void;
		defaultValue: T;
	}

	const validate = ({ condition, value, action, defaultValue }: IValidate) => {
		console.log(` [ CONDITION ] ${condition}, [ VALUE ] ${value} `);
		if (!value) action(defaultValue);
		if (condition) action(value);
		return;
	};

	const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isDay = 31 >= e.target.valueAsNumber && e.target.valueAsNumber >= 1;
		validate({
			condition: isDay,
			action: setDay,
			defaultValue: '',
			value: e.target.value
		});
	};
	const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isMonth = 12 >= e.target.valueAsNumber && e.target.valueAsNumber >= 1;
		validate({
			condition: isMonth,
			action: setMonth,
			defaultValue: '',
			value: e.target.value
		});
	};
	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isYear = today.getFullYear() + 10 >= e.target.valueAsNumber && e.target.valueAsNumber >= 2000;
		validate({
			condition: isYear,
			action: setYear,
			defaultValue: '',
			value: e.target.value
		});
	};

	const handleApplyChange = (date: Date) => {
		setSelectedDay(date);
		setDay(date.getDate().toString().padStart(2, '0'));
		setMonth((+date.getMonth() + 1).toString().padStart(2, '0'));
		setYear(date.getFullYear().toString());
	};

	useEffect(() => {
		const date = new Date();
		date.setDate(+day);
		date.setMonth(+month - 1);
		date.setFullYear(+year);

		setSelectedDay(date);
	}, [day, month, year]);

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
					className={`date-picker__input-date date-picker__input-date_month ${
						month && 'date-picker__input-date_item-default'
					}`}
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
					max={today.getFullYear() + 10}
					maxLength={4}
					min={2000}
					placeholder='ГГГГ'
					onChange={handleYearChange}
				/>
			</p>
			<Image
				src='/accordion.svg'
				alt='accordion'
				width={12}
				className={`date-picker__image ${showCalendar && 'date-picker__image_rotate'}`}
				onClick={toggleCalendar}
				height={12}
			/>
			<CSSTransition
				in={showCalendar}
				classNames='date-picker__animate'
				timeout={200}
				unmountOnExit
			>
				<Calendar
					selectedDate={selectedDate}
					selectDate={date => setSelectedDay(date)}
					onApply={handleApplyChange}
					onClear={toggleCalendar}
				/>
			</CSSTransition>
		</div>
	);
};
