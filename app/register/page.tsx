import { FormWrapper } from '@/components/register/logic';
import { Slider } from '@/components/ui-ud/ui';
import image_2 from '@/public/landing-2.png';
import image_3 from '@/public/landing-3.png';

const REGISTER_IMAGES: Img[] = [
  { image: image_2, alt: 'landing-2' },
  { image: image_3, alt: 'landing-3' },
];

const Register = () => {
  return (
    <main className='page register'>
      <Slider images={REGISTER_IMAGES} />
      <FormWrapper />
    </main>
  );
};

export default Register;
