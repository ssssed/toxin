import './style.scss';
import { Container, Title } from '@/components/ui-ud/ui';
import Card from '../card';
import { Pagination } from '@/components/ui-ud/logic';
import Image from 'next/image';
import { FC } from 'react';

const Rooms: FC<Rooms> = ({
  currentPage,
  setCurrentPage,
  rooms,
  elementPerPage,
  totalPage,
}) => {
  return (
    <Container
      maxWidth={834}
      direction='column'
      gap={16}
    >
      <Title>Номера, которые мы для вас подобрали</Title>
      <div className='rooms'>
        {rooms.map(room => (
          <Card
            key={room.id}
            {...room}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementPerPage={elementPerPage}
        totalPage={totalPage}
        buttonClass='pagination__button'
        buttonActiveClass='pagination__button_active'
        navigationButtonClass='pagination__navigation'
        navigationNextContent={
          <Image
            src='/arrow.svg'
            alt='arrow'
            width={24}
            height={24}
          />
        }
        navigationPrevContent={
          <Image
            src='/arrow.svg'
            style={{ rotate: '180deg' }}
            alt='arrow'
            width={24}
            height={24}
          />
        }
      />
      <p className='rooms__text'>1 – 12 из 100+ вариантов аренды</p>
    </Container>
  );
};

export default Rooms;
