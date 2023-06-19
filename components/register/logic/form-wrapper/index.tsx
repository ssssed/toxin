'use client';

import {
  Button,
  Form,
  FormInfoBar,
  Input,
  InputGroup,
  SubmitButton,
  Title,
} from '@/components/ui-ud/ui';
import { useState, memo } from 'react';

const FormWrapper = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
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
      <FormInfoBar>
        <span>Нет аккаунта на Toxin?</span>
        <Button type='default'>создать</Button>
      </FormInfoBar>
    </Form>
  );
};

export default memo(FormWrapper);
