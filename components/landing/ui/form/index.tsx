'use client';

import {
  DatePicker,
  Label,
  Select,
  SubmitButton,
  Title,
  Option,
  SelectButtonGroups,
} from '@/components/ui-ud/ui';
import './style.scss';
import { FC, useMemo, useState } from 'react';
import 'animate.css';

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

  const title = useMemo(() => {
    if (+countPeople === 0) return 'Сколько гостей';
    if (+countPeople === 1) {
      return `${+countPeople} гость`;
    } else if (+countPeople % 10 === 1 && +countPeople !== 11) {
      return `${+countPeople} гость`;
    } else if (
      +countPeople % 10 >= 2 &&
      +countPeople % 10 <= 4 &&
      (+countPeople < 10 || +countPeople > 20)
    ) {
      return `${+countPeople} гостя`;
    } else {
      return `${+countPeople} гостей`;
    }
  }, [countPeople]);
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
            title={title}
          >
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
            <SelectButtonGroups
              onClear={onClear}
              onApply={handleAcceptSelectContent}
            />
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
