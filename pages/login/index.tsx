import { NextPage } from 'next';
import image_2 from '@/public/landing-2.png';
import image_3 from '@/public/landing-3.png';
import { Img, Slider } from '@/shared/ui/slider';
import { AuthForm } from '@/features/auth';

const LOGIN_IMAGES: Img[] = [
  { image: image_2, alt: 'landing-2' },
  { image: image_3, alt: 'landing-3' },
];

const LoginPage: NextPage = () => {
  return (
    <main className='page login'>
      <Slider images={LOGIN_IMAGES} />
      <AuthForm />
    </main>
  );
};

export default LoginPage;
