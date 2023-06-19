'use client';

import Image from 'next/image';
import './style.scss';
import { FC, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';

const Select: FC<Select> = ({ isShow, setShow, children, value }) => {
  const handleToggleList = () => setShow(!isShow);

  const title = useMemo(() => {
    if (+value === 0) return 'Сколько гостей';
    if (+value === 1) {
      return `${+value} гость`;
    } else if (+value % 10 === 1 && +value !== 11) {
      return `${+value} гость`;
    } else if (
      +value % 10 >= 2 &&
      +value % 10 <= 4 &&
      (+value < 10 || +value > 20)
    ) {
      return `${+value} гостя`;
    } else {
      return `${+value} гостей`;
    }
  }, [value]);

  return (
    <div
      className={`select ${isShow && 'select_open'}`}
      placeholder='Cколько гостей'
    >
      <p className='select__text'>{title}</p>
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
