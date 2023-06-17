'use client';

import {
  DatePicker,
  Label,
  Select,
  SubmitButton,
  Title,
} from '@/components/ui-ud/ui';
import './style.scss';
import { FC, useEffect } from 'react';
import 'animate.css';
import WOW from 'wow.js';

const LandingForm: FC<LandingForm> = ({
  onSubmit,
  guest,
  changeGuest,
  onClear,
}) => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <form
      className='landing-form wow animate__animated animate__fadeInLeft'
      onSubmit={onSubmit}
    >
      <div className='landing-form__content'>
        <Title>Найдём номера под ваши пожелания</Title>
        <div className='landing-form__dates'>
          <Label className='landing-form__label'>
            Прибытие
            <DatePicker />
          </Label>
          <Label className='landing-form__label'>
            Выезд
            <DatePicker />
          </Label>
        </div>
        <Label className='landing-form__visitor'>
          Гости
          <Select
            guest={guest}
            onClear={onClear}
            changeGuest={changeGuest}
          />
        </Label>
        <SubmitButton className='landing-form__button'>
          подобрать номер
        </SubmitButton>
      </div>
    </form>
  );
};

export default LandingForm;
