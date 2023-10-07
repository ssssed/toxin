import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import './style.scss';

import Skeleton from 'react-loading-skeleton';

import arrow from '@/public/arrow.svg';

import { handleGetRooms, IMeta, Room, RoomCard } from '@/entities/room';

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

	const [isLoading, setLoading] = useState<boolean>(true);

	const [rooms, setRooms] = useState<Room[]>([]);
	const [meta, setMeta] = useState<IMeta | null>(null);
	const handleRenderRooms = async () => {
		setLoading(true);
		const { data, meta } = await handleGetRooms(currentPage).finally(() => setLoading(false));
		setMeta(meta);
		setRooms(data);
	};

	useEffect(() => {
		handleRenderRooms();
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
			{isLoading && (
				<Skeleton
					inline
					containerClassName='rooms'
					className={classNames('room', 'wow', 'animate__', 'animate__bounceIn', 'animated')}
					count={12}
					width={270}
					height={263}
					borderRadius={4}
				/>
			)}
			<div className='rooms'>
				{!isLoading &&
					rooms.map((room, index) => (
						<RoomCard
							key={room.id}
							{...room}
							data-wow-delay={`${(index * 4) / 100}s`}
						/>
					))}
			</div>
			<Condition
				if={meta?.totalPage! > 0 && rooms.length > 0}
				then={
					<>
						<Pagination
							currentPage={currentPage}
							setCurrentPage={handleCurrentPageChange}
							elementPerPage={meta?.elementPerPage!}
							totalPage={meta?.totalPage!}
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
						<p className='rooms__text'>
							1 – 12 из {meta && meta?.totalRooms >= 100 ? '100+' : meta?.totalRooms} вариантов аренды
						</p>
					</>
				}
				else={<div>Нет данных</div>}
			/>
		</Container>
	);
};

export { Rooms };
