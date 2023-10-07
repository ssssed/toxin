import cn from 'classnames';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './style.scss';

import Link from 'next/link';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SwiperType, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Star } from '@/shared/ui/star';
import { Subtitle } from '@/shared/ui/subtitle';

import { RoomType } from '../constants';
import { Room } from '../types';

const RoomCard: FC<Room> = room => {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);

	const handleNextSlide = () => swiper!.slideNext();
	const handlePrevSlide = () => swiper!.slidePrev();

	const rating = Math.floor(Math.random() * 5);
	return (
		<div className={cn('room', 'wow', 'animate__animated', 'animate__bounceIn')}>
			<Swiper
				className='room-slider'
				modules={[Pagination, Navigation, EffectFade]}
				slidesPerView={1}
				navigation={{
					nextEl: 'room__button_next',
					prevEl: 'room__button_prev'
				}}
				onSwiper={setSwiper}
				onInit={setSwiper}
				pagination={{
					clickable: true,
					type: 'bullets',
					dynamicBullets: false
				}}
				speed={2000}
				observeParents
				observer
				loop
			>
				{room.images?.map(image => (
					<SwiperSlide
						key={image.id}
						className='room__slide'
					>
						<Image
							src={image.link}
							alt='room'
							width={270}
							height={151}
							className='room__slide-img'
						/>
					</SwiperSlide>
				))}
				{!room.images?.length && (
					<SwiperSlide
						key={`image ${room.id}`}
						className='room__slide'
					>
						<Skeleton
							inline
							width={270}
							height={151}
						/>
					</SwiperSlide>
				)}
				{room.images?.length > 1 && (
					<>
						<button
							className='room__button room__button_next'
							onClick={handleNextSlide}
						></button>
						<button
							className='room__button room__button_prev'
							onClick={handlePrevSlide}
						></button>
					</>
				)}
			</Swiper>
			<div className='room__content'>
				<div className='room__info-bar'>
					<Subtitle>
						<Link href={`/room/${room.id}`}>№ {room.number}</Link>
					</Subtitle>
					<span className='room__type'>
						<Link href={`/room/${room.id}`}>{RoomType[room.type]}</Link>
					</span>
					<p className='room__price'>
						<span className='room__important-text'>
							<Link href={`/room/${room.id}`}>{room.day_price}₽ </Link>
						</span>
						в сутки
					</p>
				</div>
				<div className='room__review'>
					<Star rating={room.rating} />
					{room._count.comments ? (
						<p className='room__count-review'>
							<span className='room__important-text'>
								<Link href={`/room/${room.id}`}>{room._count.comments} </Link>
							</span>
							Отзывов
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export { RoomCard };
