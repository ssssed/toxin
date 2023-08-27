import Image from 'next/image';

// eslint-disable-next-line import/order
import { ELEMENT_PER_SLIDE, ROOMS, TOTAL_PAGE } from '../constants';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import './style.scss';

import arrow from '@/public/arrow.svg';

import { RoomCard } from '@/entities/room';

import { Condition } from '@/shared/helpers';
import { paths } from '@/shared/routing';
import { Container } from '@/shared/ui/container';
import { Pagination } from '@/shared/ui/pagination';
import { Title } from '@/shared/ui/title';

const Rooms = () => {
	const router = useRouter();
	const query = router.query;
	const queryPage = Number(query['page']) || 1;
	const [currentPage, setCurrentPage] = useState<number>(queryPage);

	const [rooms, setRooms] = useState(ROOMS);

	useEffect(() => {
		const startIndex = (currentPage - 1) * ELEMENT_PER_SLIDE;
		const endIndex = startIndex + ELEMENT_PER_SLIDE;
		setRooms(ROOMS.slice(startIndex, endIndex));
	}, [currentPage]);

	useEffect(() => {
		const queryCurrentPage = Number(query['page']) || 1;
		setCurrentPage(queryCurrentPage);
	}, [query]);

	const handleCurrentPageChange = (page: number) => {
		router.push(paths.rooms({ page: page.toString() }));
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
				{rooms.map((room, index) => (
					<RoomCard
						key={room.id}
						{...room}
						data-wow-delay={`${(index * 4) / 100}s`}
					/>
				))}
			</div>
			<Condition
				if={TOTAL_PAGE > 0 && rooms.length > 0}
				then={
					<>
						<Pagination
							currentPage={currentPage}
							setCurrentPage={handleCurrentPageChange}
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
					</>
				}
				else={<div>Нет данных</div>}
			/>
		</Container>
	);
};

export { Rooms };
