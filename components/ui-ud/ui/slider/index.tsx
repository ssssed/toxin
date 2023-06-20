'use client';

import { FC, memo } from 'react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './style.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

/*
    EffectCreative - работает не очень стабильно, спустя время возьникают лаги
*/

const Slider: FC<Slider> = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      speed={2000}
      effect='fade'
      observeParents
      observer
      loop
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          <Image
            src={`/${image}.svg`}
            className='landing__image'
            alt={image}
            loading='lazy'
            width={1440}
            height={830}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(Slider);