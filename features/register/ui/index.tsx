import { RegisterData, api } from '@/shared/api/common';
import { paths } from '@/shared/routing';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import DatePicker from '@/shared/ui/datepicker';
import { Form, FormInfoBar } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { InputGroup } from '@/shared/ui/input-group';
import { Label } from '@/shared/ui/label';
import { Radio } from '@/shared/ui/radio';
import { RadioGroup } from '@/shared/ui/radio-group';
import { SubmitButton } from '@/shared/ui/submit-button';
import { Switch } from '@/shared/ui/switch';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import { Gender } from '@prisma/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

const RegisterForm = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [sex, setSex] = useState<Gender>('NONE');

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
    setSex(e.target.value as Gender);

  const handleNavigateToLoginPage = () => router.push(paths.login);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let correctDate: Date | null | string = date;
    if (!correctDate) correctDate = null;
    else {
      correctDate = new Date(date);
    }
    const data: RegisterData = {
      email,
      name,
      lastname: lastName,
      password,
      sex,
      date_birthday: correctDate,
      is_accept_special_demand: isOn,
    };
    try {
      api.register(data, user => {
        console.log(user);
        handleNavigateToLoginPage();
      });
    } catch (error) {
      console.error(error);
    }
  };

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

export { RegisterForm };
