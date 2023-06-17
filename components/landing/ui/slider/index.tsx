'use client';

import { memo } from 'react';
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

const Slider = () => {
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
      <SwiperSlide>
        <Image
          src='/landing-1.svg'
          className='landing__image'
          alt='landing 1'
          loading='lazy'
          width={1440}
          height={830}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/landing-6.svg'
          className='landing__image'
          alt='landing 6'
          width={1440}
          loading='lazy'
          height={830}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/landing-3.svg'
          className='landing__image'
          alt='landing 3'
          width={1440}
          loading='lazy'
          height={830}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/landing-7.svg'
          className='landing__image'
          alt='landing 7'
          width={1440}
          loading='lazy'
          height={830}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default memo(Slider);
