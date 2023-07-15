import { FC, useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperType, { Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Room } from '../types';
import Image from 'next/image';
import { Star, Subtitle } from '@/shared/ui';
import { IMAGES } from '../constants';

enum RoomType {
  LUXE = 'Люкс',
  DEFAULT = '',
  PREMIUM = 'Премиум',
  PRESIDENT = 'Президентский',
}

const RoomCard: FC<Room> = room => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleNextSlide = () => swiper!.slideNext();
  const handlePrevSlide = () => swiper!.slidePrev();

  const rating = Math.floor(Math.random() * 5);
  return (
    <div className='room'>
      <Swiper
        className='room-slider'
        modules={[Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        navigation={{
          nextEl: 'room__button_next',
          prevEl: 'room__button_prev',
        }}
        onSwiper={setSwiper}
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
          <SwiperSlide
            key={link}
            className='room__slide'
          >
            <Image
              src={link}
              alt='room'
              width={270}
              height={151}
              className='room__slide-img'
            />
          </SwiperSlide>
        ))}
        <button
          className='room__button room__button_next'
          onClick={handleNextSlide}
        ></button>
        <button
          className='room__button room__button_prev'
          onClick={handlePrevSlide}
        ></button>
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

export { RoomCard };
