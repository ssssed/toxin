import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import type { Guest } from '../types';
import DatePicker from '@/shared/ui/datepicker';
import { useNumeralForm } from '@/shared/helpers';
import { paths } from '@/shared/routing';
import './style.scss';
import { Title } from '@/shared/ui/title';
import { Label } from '@/shared/ui/label';
import { ButtonGroups, Option, Select } from '@/shared/ui/select';
import { SubmitButton } from '@/shared/ui/submit-button';

export const FindForm = () => {
  const router = useRouter();

  const [guest, setGuest] = useState<Guest>({
    adult: 0,
    children: 0,
    baby: 0,
  });

  const handleAdultIncrement = () =>
    setGuest(state => ({ ...state, adult: state.adult + 1 }));
  const handleChildrenIncrement = () =>
    setGuest(state => ({ ...state, children: state.children + 1 }));
  const handleBabyIncrement = () =>
    setGuest(state => ({ ...state, baby: state.baby + 1 }));

  const handleAdultDecrement = () =>
    setGuest(state => ({
      ...state,
      adult: state.adult - 1 >= 0 ? state.adult - 1 : state.adult,
    }));
  const handleChildrenDecrement = () =>
    setGuest(state => ({
      ...state,
      children: state.children - 1 >= 0 ? state.children - 1 : state.children,
    }));
  const handleBabyDecrement = () =>
    setGuest(state => ({
      ...state,
      baby: state.baby - 1 >= 0 ? state.baby - 1 : state.baby,
    }));

  const handleClearGuest = () =>
    setGuest({
      adult: 0,
      children: 0,
      baby: 0,
    });

  const [isShowSelectContent, setShowSelectContent] = useState<boolean>(false);

  const handleAcceptSelectContent = () => setShowSelectContent(false);

  const countPeople = useMemo(
    () => guest.adult + guest.baby + guest.children,
    [guest]
  );

  const title = useMemo(() => {
    if (+countPeople === 0) return 'Сколько гостей';
    return useNumeralForm(countPeople, ['гость', 'гость', 'гостя', 'гостей']);
  }, [countPeople]);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(paths.rooms({ page: '1' }));
  };

  return (
    <form
      className='landing-form wow animate__animated animate__fadeInLeft'
      onSubmit={handleSubmitForm}
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
              increment={handleAdultIncrement}
              decrement={handleAdultDecrement}
            >
              <Label>взрослые</Label>
            </Option>
            <Option
              value={guest.children}
              increment={handleChildrenIncrement}
              decrement={handleChildrenDecrement}
            >
              <Label>дети</Label>
            </Option>
            <Option
              value={guest.baby}
              increment={handleBabyIncrement}
              decrement={handleBabyDecrement}
            >
              <Label>младенцы</Label>
            </Option>
            <ButtonGroups
              onClear={handleClearGuest}
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
