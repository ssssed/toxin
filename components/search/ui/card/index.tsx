'use client';

import { Star, Subtitle } from '@/components/ui-ud/ui';
import { Room } from '@prisma/client';
import Image from 'next/image';
import { FC } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/scss/pagination';

enum RoomType {
  LUXE = 'Люкс',
  DEFAULT = '',
  PREMIUM = 'Премиум',
  PRESIDENT = 'Президентский',
}

const IMAGES: string[] = ['/room-img.png', '/room-img2.png', '/room-img3.png'];

const Card: FC<Room> = room => {
  const rating = Math.floor(Math.random() * 5);
  return (
    <div className='room'>
      <Swiper
        style={{ width: '100%' }}
        modules={[Pagination, EffectFade]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'bullets',
          dynamicBullets: false,
        }}
        speed={2000}
        observeParents
        observer
        loop
      >
        {IMAGES.map(link => (
          <SwiperSlide key={link}>
            <Image
              src={link}
              alt='room'
              width={270}
              height={151}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='room__content'>
        <div className='room__info-bar'>
          <Subtitle>№ {room.number}</Subtitle>
          <span className='room__type'>{RoomType[room.type]}</span>
          <p className='room__price'>
            <span className='room__important-text'>{room.day_price}₽</span> в
            сутки
          </p>
        </div>
        <div className='room__review'>
          <Star rating={rating} />
          <p className='room__count-review'>
            <span className='room__important-text'>145</span> Отзывов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
