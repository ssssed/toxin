import { Container } from '@/shared/ui/container';

import { Accessibility } from './accessibility';
import { AdditionalComfort } from './additional-comfort';
import { ComfortsRooms } from './comforts-rooms';
import { DateOfArrival } from './date-of-arrival';
import { GuestSelect } from './guest-select';
import { HomeRule } from './home-rule';
import { PriceRange } from './price-range';

const Filter = () => {
	return (
		<Container
			maxWidth={266}
			direction='column'
			items='flex-start'
			gap={30}
		>
			<Container
				direction='column'
				gap={20}
			>
				<DateOfArrival />
				<GuestSelect />
			</Container>
			<PriceRange />
			<HomeRule />
			<Accessibility />
			<ComfortsRooms />
			<AdditionalComfort />
		</Container>
	);
};

export { Filter };
