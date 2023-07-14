import { FC } from 'react';
import './style.scss';
import type { InputType } from './types';

const Input: FC<InputType> = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
}) => {
  return (
    <input
      className='input'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};

export { Input };
