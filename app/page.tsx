import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
import { Description } from '@/components/landing/ui';
import { Slider } from '@/components/ui-ud/ui';

const SLIDER_IMAGES = ['landing-1', 'landing-6', 'landing-3', 'landing-7'];

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
