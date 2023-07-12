import { FC } from 'react';
import './style.scss';
import { Label } from '@/components/ui-ud/ui';

const Option: FC<Option> = ({
  children,
  value,
  increment,
  decrement,
  min = 0,
}) => {
  return (
    <div className='select-item'>
      <div className='select-item__text'>{children}</div>
      <div className='select-item__buttons'>
        <button
          type='button'
          className={`select-item__button select-item__button_increment ${
            value === min && 'select-item_disabled'
          }`}
          disabled={value === min}
          onClick={decrement}
        >
          -
        </button>
        <div className='select-item__number'>
          <Label>{value}</Label>
        </div>
        <button
          type='button'
          className='select-item__button'
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Option;
