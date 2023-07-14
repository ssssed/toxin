import { FC, memo } from 'react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './style.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import type { SliderType } from './types';
/*
    EffectCreative - работает не очень стабильно, спустя время возьникают лаги
*/

const Slider: FC<SliderType> = memo(({ images }) => {
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
      {images.map(({ image, alt }, index) => (
        <SwiperSlide key={alt}>
          <Image
            src={image}
            className='landing__image'
            alt={alt}
            placeholder='blur'
            width={1440}
            height={830}
            quality={100}
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export { Slider };
