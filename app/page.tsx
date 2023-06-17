import Image from 'next/image';
import './home.scss';
import { LandingFormWrapper } from '@/components/landing/logic';
import { Slider } from '@/components/landing/ui';

export default function Home() {
  return (
    <main className='home'>
      <section className='landing'>
        <LandingFormWrapper />
        <Slider />
        <p className='landing__text'>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </section>
    </main>
  );
}
