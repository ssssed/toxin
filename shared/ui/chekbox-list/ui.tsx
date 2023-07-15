import accordion from '@/public/accordion.svg';
import Image from 'next/image';
import './style.scss';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Label } from '@/shared/ui/label';
import type { CheckboxListType } from './types';

const CheckboxList: FC<CheckboxListType> = ({
  title = '',
  children,
  isShow,
  setShow,
}) => {
  const handleToggleList = () => setShow(!isShow);
  return (
    <div
      className='checkbox-list'
      placeholder={title}
    >
      <Label>{title}</Label>
      <Image
        src={accordion}
        className={`checkbox-list__img ${
          isShow && 'checkbox-list__img_active'
        }`}
        alt='accordion'
        onClick={handleToggleList}
        width={12}
        height={12}
      />
      <CSSTransition
        in={isShow}
        classNames='checkbox-list__animate'
        timeout={200}
        unmountOnExit
      >
        <div className='checkbox-list__list'>{children}</div>
      </CSSTransition>
    </div>
  );
};

export { CheckboxList };
