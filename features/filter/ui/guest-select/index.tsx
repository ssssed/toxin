import { useUnit } from 'effector-react';
import { useMemo, useState } from 'react';

import { $adult, $baby, $children, adultChange, babyChange, childrenChange } from '@/entities/room';

import { useNumeralForm } from '@/shared/helpers';
import { Container } from '@/shared/ui/container';
import { Label } from '@/shared/ui/label';
import { ButtonGroups, Option, Select } from '@/shared/ui/select';

export const GuestSelect = () => {
	const [isGuestShow, setGuestShow] = useState<boolean>(false);

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

	const countPeople = useMemo(() => adult + baby + children, [adult, baby, children]);

	const titleGuest = useMemo(() => {
		if (+countPeople === 0) return 'Сколько гостей';
		return useNumeralForm(countPeople, ['гость', 'гость', 'гостя', 'гостей']);
	}, [countPeople]);
	return (
		<Container
			direction='column'
			gap={5}
		>
			<Label className='landing-form__visitor'>Гости</Label>
			<Select
				isShow={isGuestShow}
				setShow={setGuestShow}
				title={titleGuest}
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
					onApply={() => {}}
				/>
			</Select>
		</Container>
	);
};
