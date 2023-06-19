import { FormWrapper } from '@/components/register/logic';
import { Slider } from '@/components/ui-ud/ui';

const LOGIN_IMAGES = ['landing-2', 'landing-3'];

const Login = () => {
  return (
    <main className='login'>
      <Slider images={LOGIN_IMAGES} />
      <FormWrapper />
    </main>
  );
};

export default Login;
