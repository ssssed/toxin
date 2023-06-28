import { FormWrapper } from '@/components/register/logic';
import { Slider } from '@/components/ui-ud/ui';

const REGISTER_IMAGES = ['landing-2', 'landing-3'];

const Register = () => {
  return (
    <main className="page register">
      <Slider images={REGISTER_IMAGES} />
      <FormWrapper />
    </main>
  );
};

export default Register;
