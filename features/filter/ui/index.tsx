import { Container } from '@/shared/ui/container';
import { GuestSelect } from './guest-select';
import { PriceRange } from './price-range';
import { HomeRule } from './home-rule';
import { Accessibility } from './accessibility';
import { ComfortsRooms } from './comforts-rooms';
import { AdditionalComfort } from './additional-comfort';

const Filter = () => {
  return (
    <Container
      maxWidth={266}
      direction='column'
      items='flex-start'
      gap={30}
    >
      <GuestSelect />
      <PriceRange />
      <HomeRule />
      <Accessibility />
      <ComfortsRooms />
      <AdditionalComfort />
    </Container>
  );
};

export { Filter };
