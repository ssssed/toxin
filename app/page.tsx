import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
// import { Description } from '@/components/landing/ui';
import { Slider } from '@/components/ui-ud/ui';
import dynamic from 'next/dynamic';

const SLIDER_IMAGES = ['landing-1', 'landing-6', 'landing-3', 'landing-7'];
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
