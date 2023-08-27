import { useUnit } from 'effector-react';
import { useMemo, useState } from 'react';

import {
	$bathrooms,
	$bedrooms,
	$beds,
	bathroomsDecrement,
	bathroomsIncrement,
	bedroomsDecrement,
	bedroomsIncrement,
	bedsDecrement,
	bedsIncrement
} from '@/entities/room';

import { useNumeralForm } from '@/shared/helpers';
import { Container } from '@/shared/ui/container';
import { Label } from '@/shared/ui/label';
import { Option, Select } from '@/shared/ui/select';

export const ComfortsRooms = () => {
	const [isComfortShow, setComfortShow] = useState<boolean>(false);
	const [bedrooms, beds, bathrooms] = useUnit([$bedrooms, $beds, $bathrooms]);

	const handleBedroomsIncrement = () => bedroomsIncrement(bedrooms + 1);
	const handleBedroomsDecrement = () => bedroomsDecrement(bedrooms - 1 >= 1 ? bedrooms - 1 : bedrooms);
	const handleBedsIncrement = () => bedsIncrement(beds + 1);
	const handleBedsDecrement = () => bedsDecrement(beds - 1 >= 1 ? beds - 1 : beds);
	const handleBathroomsIncrement = () => bathroomsIncrement(bathrooms + 1);
	const handleBathroomsDecrement = () => bathroomsDecrement(bathrooms - 1 >= 1 ? bathrooms - 1 : bathrooms);

	const bedTitle = useMemo(() => useNumeralForm(beds, ['кровать', 'кровать', 'кровати', 'кроватей']), [beds]);
	const bathroomTitle = useMemo(
		() => useNumeralForm(bathrooms, ['ванная комната', 'ванная комната', 'ванные комнаты', 'ванных комнат']),
		[bathrooms]
	);
	const bedroomsTitle = useMemo(
		() => useNumeralForm(bedrooms, ['спальня', 'спальня', 'спальни', 'спален']),
		[bedrooms]
	);

	const title = useMemo(
		() => `${bedroomsTitle}, ${bedTitle}, ${bathroomTitle}`,
		[bedroomsTitle, bedTitle, bathroomTitle]
	);
	return (
		<Container
			direction='column'
			gap={7}
		>
			<Label>удобства номера</Label>
			<Select
				isShow={isComfortShow}
				setShow={setComfortShow}
				title={title}
			>
				<Option
					value={bedrooms}
					increment={handleBedroomsIncrement}
					decrement={handleBedroomsDecrement}
					min={1}
				>
					<Label>Спальни</Label>
				</Option>
				<Option
					value={beds}
					increment={handleBedsIncrement}
					decrement={handleBedsDecrement}
					min={1}
				>
					<Label>Кровати</Label>
				</Option>
				<Option
					value={bathrooms}
					increment={handleBathroomsIncrement}
					decrement={handleBathroomsDecrement}
					min={1}
				>
					<Label>Ванные комнаты</Label>
				</Option>
			</Select>
		</Container>
	);
};
