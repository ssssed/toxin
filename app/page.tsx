import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
import { Slider } from '@/components/ui-ud/ui';
import dynamic from 'next/dynamic';
import landing_1 from '@/public/landing-1.jpg';
import landing_6 from '@/public/landing-6.png';
import landing_3 from '@/public/landing-3.png';
import landing_7 from '@/public/landing-7.png';

const SLIDER_IMAGES: Img[] = [
  { image: landing_1, alt: 'landing-1' },
  { image: landing_6, alt: 'landing-6' },
  { image: landing_3, alt: 'landing-3' },
  { image: landing_7, alt: 'landing-7' },
];

const Description = dynamic(
  () => import('@/components/landing/ui/description'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className='page home'>
      <section className='landing'>
        <LandingFormWrapper />
        <Slider images={SLIDER_IMAGES} />
        <Description />
      </section>
    </main>
  );
}
