import { api } from '@/shared/api/common';
import { paths } from '@/shared/routing';
import { Button } from '@/shared/ui/button';
import { Error } from '@/shared/ui/error';
import { Form, FormInfoBar } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { InputGroup } from '@/shared/ui/input-group';
import { SubmitButton } from '@/shared/ui/submit-button';
import { Title } from '@/shared/ui/title';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';

const AuthForm = memo(() => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPending, setPending] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
        redirect: false,
      };
      setPending(true);
      await api.auth(
        data,
        () => {
          const query = router.query;
          const callbackUrl = query['callbackUrl'];

          if (!callbackUrl) router.push(paths.home);
          else {
            router.push(callbackUrl as string);
          }
        },
        setError
      );
    } finally {
      setEmail('');
      setPassword('');
      setPending(false);
    }
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
      <SubmitButton isPending={isPending}>войти</SubmitButton>
      {error && <Error>{error}</Error>}
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
