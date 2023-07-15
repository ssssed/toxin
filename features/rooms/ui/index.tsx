import { Container, Pagination, Title } from '@/shared/ui';
import Image from 'next/image';
import { ELEMENT_PER_SLIDE, ROOMS, TOTAL_PAGE } from '../constants';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { RoomCard } from '@/entities/room';
import arrow from '@/public/arrow.svg';
import './style.scss';

const Rooms = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const params = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(params!.get('page')) || 1
  );

  const [rooms, setRooms] = useState(ROOMS);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ELEMENT_PER_SLIDE;
    const endIndex = startIndex + ELEMENT_PER_SLIDE;
    setRooms(ROOMS.slice(startIndex, endIndex));
  }, [currentPage]);

  const handleCurrentPageChange = (page: number) => {
    router.replace(`${pathname}?page=${page}`);
    setCurrentPage(page);
  };
  return (
    <Container
      maxWidth={834}
      direction='column'
      gap={16}
    >
      <Title>Номера, которые мы для вас подобрали</Title>
      <div className='rooms'>
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            {...room}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementPerPage={ELEMENT_PER_SLIDE}
        totalPage={TOTAL_PAGE}
        buttonClass='pagination__button'
        buttonActiveClass='pagination__button_active'
        navigationButtonClass='pagination__navigation'
        navigationNextContent={
          <Image
            src={arrow}
            alt='arrow'
            width={24}
            height={24}
          />
        }
        navigationPrevContent={
          <Image
            src={arrow}
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

export { Rooms };
