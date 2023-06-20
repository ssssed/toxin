'use client';

import {
  Button,
  DatePicker,
  Form,
  FormInfoBar,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  Title,
} from '@/components/ui-ud/ui';
import Radio from '@/components/ui-ud/ui/radio';
import RadioGroup from '@/components/ui-ud/ui/radio-group';
import { useRouter } from 'next/navigation';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

const CONTAINER_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
} as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const FormWrapper = () => {
  const navigate = useRouter();

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleNavigateToLoginPage = () => navigate.push('/login');

  return (
    <Form
      className='wow animate__animated animate__fadeInDownBig'
      onSubmit={handleSubmitForm}
    >
      <Title>Регистрация аккаунта</Title>
      <InputGroup>
        <Input
          value={name}
          placeholder='Имя'
          onChange={handleNameChange}
          required
        />
        <Input
          value={lastName}
          placeholder='Фамилия'
          onChange={handleLastNameChange}
          required
        />
      </InputGroup>
      <RadioGroup>
        <Radio name='sex'>Мужчина</Radio>
        <Radio name='sex'>Женщина</Radio>
      </RadioGroup>
      <div style={CONTAINER_STYLE}>
        <Label>Дата рождения</Label>
        {/* Временно */}
        <DatePicker />
      </div>
      <div style={CONTAINER_STYLE}>
        <Label>данные для входа в сервис</Label>
        <InputGroup>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Input
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </InputGroup>
      </div>
      <SubmitButton>зарегистрироваться</SubmitButton>
      <FormInfoBar>
        <span>Уже есть аккаунт на Toxin</span>
        <Button
          type='default'
          onClick={handleNavigateToLoginPage}
        >
          войти
        </Button>
      </FormInfoBar>
    </Form>
  );
};

export default FormWrapper;
