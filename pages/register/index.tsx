import { GetServerSideProps, NextPage } from 'next';
import image_2 from '@/public/landing-2.png';
import image_3 from '@/public/landing-3.png';
import { Img, Slider } from '@/shared/ui/slider';
import { RegisterForm } from '@/features/register';
import { getSession } from 'next-auth/react';

const REGISTER_IMAGES: Img[] = [
  { image: image_2, alt: 'landing-2' },
  { image: image_3, alt: 'landing-3' },
];

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Возвращаем пустой объект, если сессия не пуста
  };
};

const RegisterPage: NextPage = () => {
  return (
    <main className='page register'>
      <Slider images={REGISTER_IMAGES} />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
