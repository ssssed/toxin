import { NextPage } from 'next';
import './style.scss';
import { Container } from '@/shared/ui';
import { Filter } from '@/features/filter';
import { Rooms } from '@/features/rooms';

const RoomsPage: NextPage = () => {
  return (
    <main className='page rooms-page'>
      <Container
        direction='row'
        gap={60}
        maxWidth={1160}
        center
      >
        <Filter />
        <Rooms />
      </Container>
    </main>
  );
};

export default RoomsPage;
