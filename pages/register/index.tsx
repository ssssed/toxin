import { NextPage } from 'next';
import image_2 from '@/public/landing-2.png';
import image_3 from '@/public/landing-3.png';
import { Img, Slider } from '@/shared/ui';
import { RegisterForm } from '@/features/register';

const REGISTER_IMAGES: Img[] = [
  { image: image_2, alt: 'landing-2' },
  { image: image_3, alt: 'landing-3' },
];

const RegisterPage: NextPage = () => {
  return (
    <main className='page register'>
      <Slider images={REGISTER_IMAGES} />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
