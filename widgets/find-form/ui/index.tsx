import { useUnit } from 'effector-react';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

import { $adult, $baby, $children, adultChange, babyChange, childrenChange } from '@/features/filter';

import { useNumeralForm } from '@/shared/helpers';
import { paths } from '@/shared/routing';
import { DatePicker } from '@/shared/ui/datepicker';
import { Label } from '@/shared/ui/label';
import { ButtonGroups, Option, Select } from '@/shared/ui/select';
import { SubmitButton } from '@/shared/ui/submit-button';
import { Title } from '@/shared/ui/title';

import './style.scss';

export const FindForm = () => {
	const router = useRouter();

	const [adult, children, baby] = useUnit([$adult, $children, $baby]);

	const handleAdultIncrement = () => adultChange(adult + 1);
	const handleAdultDecrement = () => adultChange(adult - 1 >= 0 ? adult - 1 : adult);
	const handleChildrenIncrement = () => childrenChange(children + 1);
	const handleChildrenDecrement = () => childrenChange(children - 1 >= 0 ? children - 1 : children);
	const handleBabyIncrement = () => babyChange(baby + 1);
	const handleBabyDecrement = () => babyChange(baby - 1 >= 0 ? baby - 1 : baby);

	const handleClearGuest = () => {
		adultChange(0);
		childrenChange(0);
		babyChange(0);
	};

	const [isShowSelectContent, setShowSelectContent] = useState<boolean>(false);

	const handleAcceptSelectContent = () => setShowSelectContent(false);

	const countPeople = useMemo(() => adult + baby + children, [adult, baby, children]);

	const title = useMemo(() => {
		if (+countPeople === 0) return 'Сколько гостей';
		return useNumeralForm(countPeople, ['гость', 'гость', 'гостя', 'гостей']);
	}, [countPeople]);

	const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.replace(paths.rooms({ page: '1' }));
	};

	return (
		<form
			className='landing-form wow animate__animated animate__fadeInLeft'
			onSubmit={handleSubmitForm}
		>
			<div className='landing-form__content'>
				<Title>Найдём номера под ваши пожелания</Title>
				<div className='landing-form__dates'>
					<Label className='landing-form__label'>
						Прибытие
						<DatePicker />
					</Label>
					<Label className='landing-form__label'>
						Выезд
						<DatePicker />
					</Label>
				</div>
				<Label className='landing-form__visitor'>
					Гости
					<Select
						isShow={isShowSelectContent}
						setShow={setShowSelectContent}
						title={title}
					>
						<Option
							value={adult}
							increment={handleAdultIncrement}
							decrement={handleAdultDecrement}
						>
							<Label>взрослые</Label>
						</Option>
						<Option
							value={children}
							increment={handleChildrenIncrement}
							decrement={handleChildrenDecrement}
						>
							<Label>дети</Label>
						</Option>
						<Option
							value={baby}
							increment={handleBabyIncrement}
							decrement={handleBabyDecrement}
						>
							<Label>младенцы</Label>
						</Option>
						<ButtonGroups
							onClear={handleClearGuest}
							onApply={handleAcceptSelectContent}
						/>
					</Select>
				</Label>
				<SubmitButton className='landing-form__button'>подобрать номер</SubmitButton>
			</div>
		</form>
	);
};
