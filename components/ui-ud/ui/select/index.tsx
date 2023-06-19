'use client';

import Image from 'next/image';
import './style.scss';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

const Select: FC<Select> = ({ isShow, setShow, children, value }) => {
  const handleToggleList = () => setShow(!isShow);
  return (
    <div
      className='select'
      placeholder='Cколько гостей'
    >
      <p className='select__text'>{value} гостя</p>
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
        {children}
      </CSSTransition>
    </div>
  );
};

export default Select;
