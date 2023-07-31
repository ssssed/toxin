import { Container } from '@/shared/ui/container';
import { GuestSelect } from './guest-select';
import { PriceRange } from './price-range';
import { HomeRule } from './home-rule';
import { Accessibility } from './accessibility';
import { ComfortsRooms } from './comforts-rooms';
import { AdditionalComfort } from './additional-comfort';
import { DateOfArrival } from './date-of-arrival';

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
