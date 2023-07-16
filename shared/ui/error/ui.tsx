import { FC } from 'react';
import './style.scss';
import { ErrorType } from './types';

const Error: FC<ErrorType> = ({ children, align = 'start' }) => {
  return (
    <span
      className='error'
      style={{ textAlign: align }}
    >
      {children}
    </span>
  );
};

export { Error };
