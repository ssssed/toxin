import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
import { Description, Slider } from '@/components/landing/ui';

export default function Home() {
  return (
    <main className='home'>
      <section className='landing'>
        <LandingFormWrapper />
        <Slider />
        <Description />
      </section>
    </main>
  );
}
