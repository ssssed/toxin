'use client';

import {
  DatePicker,
  Label,
  Select,
  SubmitButton,
  Title,
  Option,
} from '@/components/ui-ud/ui';
import './style.scss';
import { FC, useEffect, useMemo, useState } from 'react';
import 'animate.css';
import WOW from 'wow.js';

const LandingForm: FC<LandingForm> = ({
  onSubmit,
  guest,
  changeGuest,
  onClear,
}) => {
  // Select
  const [isShowSelectContent, setShowSelectContent] = useState<boolean>(false);

  const handleAcceptSelectContent = () => setShowSelectContent(false);

  const countPeople = useMemo(
    () => guest.adult + guest.baby + guest.children,
    [guest]
  );

  // Animate
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
            isShow={isShowSelectContent}
            setShow={setShowSelectContent}
            value={countPeople}
          >
            <div className='select__list'>
              <div className='select__content'>
                <Option
                  value={guest.adult}
                  increment={changeGuest.handleAdultIncrement}
                  decrement={changeGuest.handleAdultDecrement}
                >
                  <Label>взрослые</Label>
                </Option>
                <Option
                  value={guest.children}
                  increment={changeGuest.handleChildrenIncrement}
                  decrement={changeGuest.handleChildrenDecrement}
                >
                  <Label>дети</Label>
                </Option>
                <Option
                  value={guest.baby}
                  increment={changeGuest.handleBabyIncrement}
                  decrement={changeGuest.handleBabyDecrement}
                >
                  <Label>младенцы</Label>
                </Option>
                <div className='select__buttons'>
                  <button
                    className='select__button'
                    onClick={onClear}
                  >
                    очистить
                  </button>
                  <button
                    className='select__button'
                    onClick={handleAcceptSelectContent}
                  >
                    применить
                  </button>
                </div>
              </div>
            </div>
          </Select>
        </Label>
        <SubmitButton className='landing-form__button'>
          подобрать номер
        </SubmitButton>
      </div>
    </form>
  );
};

export default LandingForm;
