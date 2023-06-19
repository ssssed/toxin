import { FC } from 'react';
import './style.scss';

const Input: FC<Input> = ({
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

export default Input;
