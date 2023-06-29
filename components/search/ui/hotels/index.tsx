import './style.scss';
import { Room } from '@prisma/client';
import { Container, Title } from '@/components/ui-ud/ui';
import Card from '../card';

const ROOMS: Room[] = [
  {
    id: 1,
    type: 'LUXE',
    number: 888,
    created: new Date(),
    day_price: 9900,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 2,
    type: 'DEFAULT',
    number: 840,
    created: new Date(),
    day_price: 9900,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 3,
    type: 'DEFAULT',
    number: 841,
    created: new Date(),
    day_price: 9900,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 4,
    type: 'DEFAULT',
    number: 842,
    created: new Date(),
    day_price: 9200,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 5,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
];

const Rooms = () => {
  return (
    <Container
      maxWidth={834}
      direction='column'
      gap={16}
    >
      <Title>Номера, которые мы для вас подобрали</Title>
      <div className='rooms'>
        {ROOMS.map(room => (
          <Card key={room.id} {...room} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
