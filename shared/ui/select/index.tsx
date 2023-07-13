import accordion from '@/public/accordion.svg';
import Image from 'next/image';
import './style.scss';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

const Select: FC<Select> = ({ isShow, setShow, children, title }) => {
  const handleToggleList = () => setShow(!isShow);

  return (
    <div
      className={`select ${isShow && 'select_open'}`}
      placeholder={title}
    >
      <p className='select__text'>{title}</p>
      <Image
        src={accordion}
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
          <div className='select__content'>{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Select;
