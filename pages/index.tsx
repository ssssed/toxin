import landing_1 from '@/public/landing-1.jpg';
import landing_6 from '@/public/landing-6.png';
import landing_3 from '@/public/landing-3.png';
import landing_7 from '@/public/landing-7.png';
import './style.scss';
import { FindForm } from '@/features/find-form';
import { Img, Slider } from '@/shared/ui/slider';

const SLIDER_IMAGES: Img[] = [
  { image: landing_1, alt: 'landing-1' },
  { image: landing_6, alt: 'landing-6' },
  { image: landing_3, alt: 'landing-3' },
  { image: landing_7, alt: 'landing-7' },
];

export default function Home() {
  return (
    <main className='page home'>
      <section className='landing'>
        <FindForm />
        <Slider images={SLIDER_IMAGES} />
        <p className='landing__text wow animate__animated animate__fadeInRight'>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </section>
    </main>
  );
}
