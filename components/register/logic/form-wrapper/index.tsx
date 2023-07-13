'use client';

import {
  Button,
  Container,
  DatePicker,
  Form,
  FormInfoBar,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  Switch,
  Text,
  Title,
} from '@/components/ui-ud/ui';
import Radio from '@/components/ui-ud/ui/radio';
import RadioGroup from '@/components/ui-ud/ui/radio-group';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FormWrapper = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [sex, setSex] = useState<string>('NONE');

  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => setIsOn(!isOn);

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
  const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSex(e.target.value);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(sex);

      const response = await fetch(`api/user`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          lastname: lastName,
          email,
          password,
          date_birthday: null,
          is_accept_special_demand: isOn,
          sex,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleNavigateToLoginPage();
      }
    } catch (error) {}
  };

  const handleNavigateToLoginPage = () => router.push('/login');

  return (
    <Form
      className='wow animate__animated animate__fadeInDownBig form-register'
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
        <Radio
          name='sex'
          checked={sex === 'MALE'}
          value='MALE'
          onChange={handleSexChange}
        >
          Мужчина
        </Radio>
        <Radio
          name='sex'
          checked={sex === 'FEMALE'}
          value='FEMALE'
          onChange={handleSexChange}
        >
          Женщина
        </Radio>
      </RadioGroup>
      <Container
        gap='5px'
        direction='column'
      >
        <Label>Дата рождения</Label>
        {/* Временно */}
        <DatePicker />
      </Container>
      <Container
        gap='5px'
        direction='column'
      >
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
        <Container
          direction='row'
          gap='10px'
          items='center'
          padding='5px 0 0'
        >
          <Switch
            value={isOn}
            onToggle={handleToggleSwitch}
          />
          <Text type='default'>Получать спецпредложения</Text>
        </Container>
      </Container>
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
