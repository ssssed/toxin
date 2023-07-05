import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
import { Slider } from '@/components/ui-ud/ui';
import dynamic from 'next/dynamic';
import landing_1 from '@/public/landing-1.svg';
import landing_6 from '@/public/landing-6.png';
import landing_3 from '@/public/landing-3.png';
import landing_7 from '@/public/landing-7.png';

const SLIDER_IMAGES: Img[] = [
  { image: landing_1, blur: '/blur-landing-1.jpg', alt: 'landing-1' },
  { image: landing_6, blur: '/blur-landing-6.png', alt: 'landing-6' },
  { image: landing_3, blur: '/blur-landing-3.png', alt: 'landing-3' },
  { image: landing_7, blur: '/blur-landing-7.png', alt: 'landing-7' },
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
