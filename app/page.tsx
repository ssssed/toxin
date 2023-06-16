import Image from 'next/image';
import './home.scss';
import { LandingForm } from '@/components/landing/ui';

export default function Home() {
  return (
    <main className='home'>
      <section className='landing'>
        <LandingForm />
        <Image
          src='/landing-3.svg'
          className='landing__image'
          alt='landing 3'
          width={1440}
          height={830}
        />
        <p className='landing__text'>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </p>
      </section>
    </main>
  );
}
