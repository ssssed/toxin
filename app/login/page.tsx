import { FormWrapper } from '@/components/login/logic';
import { Slider } from '@/components/ui-ud/ui';
import image_2 from '@/public/landing-2.svg';
import image_3 from '@/public/landing-3.png';

const LOGIN_IMAGES: Img[] = [
  { image: image_2, alt: 'landing-2', blur: '/blur-landing-2.png' },
  { image: image_3, alt: 'landing-3', blur: '/blur-landing-3.png' },
];

const Login = () => {
  return (
    <main className='page login'>
      <Slider images={LOGIN_IMAGES} />
      <FormWrapper />
    </main>
  );
};

export default Login;
