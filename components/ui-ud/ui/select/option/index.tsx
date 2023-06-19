import { FC } from 'react';
import './style.scss';
import { Label } from '@/components/ui-ud/ui';

const Option: FC<Option> = ({ children, value, increment, decrement }) => {
  return (
    <div className='select-item'>
      <div className='select-item__text'>{children}</div>
      <button
        className='select-item__button select-item__button_increment'
        onClick={decrement}
      >
        -
      </button>
      <div className='select-item__number'>
        <Label>{value}</Label>
      </div>
      <button
        className='select-item__button'
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Option;
