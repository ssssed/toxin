'use client';

import Image from 'next/image';
import './style.scss';
import { FC, useMemo, useState } from 'react';
import SelectItem from './select-item';
import Label from '../label';
import { CSSTransition } from 'react-transition-group';

const Select: FC<Select> = ({ guest, changeGuest, onClear }) => {
  const [isShow, setShow] = useState<boolean>();

  const handleToggleList = () => setShow(!isShow);

  const countPeople = useMemo(
    () => guest.adult + guest.baby + guest.children,
    [guest]
  );

  const handleAccept = () => setShow(false);

  return (
    <div
      className='select'
      placeholder='Cколько гостей'
    >
      <p className='select__text'>{countPeople} гостя</p>
      <Image
        src='/accordion.svg'
        className={`select__img ${isShow && 'select__img_active'}`}
        alt='accordion'
        onClick={handleToggleList}
        width={12}
        height={12}
      />
      <CSSTransition
        in={isShow}
        classNames='select__animate'
        timeout={200}
        unmountOnExit
      >
        <div className='select__list'>
          <div className='select__content'>
            <SelectItem
              value={guest.adult}
              increment={changeGuest.handleAdultIncrement}
              decrement={changeGuest.handleAdultDecrement}
            >
              <Label>взрослые</Label>
            </SelectItem>
            <SelectItem
              value={guest.children}
              increment={changeGuest.handleChildrenIncrement}
              decrement={changeGuest.handleChildrenDecrement}
            >
              <Label>дети</Label>
            </SelectItem>
            <SelectItem
              value={guest.baby}
              increment={changeGuest.handleBabyIncrement}
              decrement={changeGuest.handleBabyDecrement}
            >
              <Label>младенцы</Label>
            </SelectItem>
            <div className='select__buttons'>
              <button
                className='select__button'
                onClick={onClear}
              >
                очистить
              </button>
              <button
                className='select__button'
                onClick={handleAccept}
              >
                применить
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Select;
