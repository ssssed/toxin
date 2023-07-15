import { paths } from '@/shared/routing';
import { Button } from '@/shared/ui/button';
import { Form, FormInfoBar } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { InputGroup } from '@/shared/ui/input-group';
import { SubmitButton } from '@/shared/ui/submit-button';
import { Title } from '@/shared/ui/title';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';

const AuthForm = memo(() => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      const query = router.query;
      const callbackUrl = query['callbackUrl'];

      if (!callbackUrl) router.push(paths.home);
      else {
        router.push(callbackUrl as string);
      }
    }

    setEmail('');
    setPassword('');
  };

  const handleNavigateToRegisterPage = () => router.push(paths.register);

  return (
    <Form
      className='wow animate__animated animate__fadeInDownBig'
      onSubmit={handleSubmitForm}
    >
      <Title>Войти</Title>
      <InputGroup>
        <Input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Email'
          required
        />
        <Input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Пароль'
          required
        />
      </InputGroup>
      <SubmitButton>войти</SubmitButton>
      <span style={{ color: 'red' }}>{error}</span>
      <FormInfoBar>
        <span>Нет аккаунта на Toxin?</span>
        <Button
          type='default'
          onClick={handleNavigateToRegisterPage}
        >
          создать
        </Button>
      </FormInfoBar>
    </Form>
  );
});

export { AuthForm };
