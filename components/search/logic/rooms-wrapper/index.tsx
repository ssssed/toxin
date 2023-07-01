'use client';

import { Rooms } from '@/components/search/ui';
import { useEffect, useState } from 'react';
import { Room } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
  {
    id: 6,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 7,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 8,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 9,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 10,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 11,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 12,
    type: 'DEFAULT',
    number: 843,
    created: new Date(),
    day_price: 8100,
    is_deleted: false,
    services_price: 300,
    additional_services_price: 0,
    updated: new Date(),
  },
  {
    id: 13,
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

const ELEMENT_PER_SLIDE = 12;
const TOTAL_PAGE = Math.ceil(ROOMS.length / ELEMENT_PER_SLIDE);
console.log(TOTAL_PAGE);

const RoomsWrapper = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(params.get('page')) | 1
  );

  const [rooms, setRooms] = useState(ROOMS);

  useEffect(() => {
    router.push(`${pathname}?page=${currentPage}`);
    const startIndex = (currentPage - 1) * ELEMENT_PER_SLIDE;
    const endIndex = startIndex + ELEMENT_PER_SLIDE;
    setRooms(ROOMS.slice(startIndex, endIndex));
  }, [currentPage]);

  return (
    <Rooms
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      rooms={rooms}
      elementPerPage={ELEMENT_PER_SLIDE}
      totalPage={TOTAL_PAGE}
    />
  );
};

export default RoomsWrapper;
