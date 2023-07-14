import { FC } from 'react';
import './style.scss';
import type { FormType } from './types';

const Form: FC<FormType> = ({ children, onSubmit, className = '' }) => {
  return (
    <form
      className={`form ${className}`}
      onSubmit={onSubmit}
    >
      <div className='form__content'>{children}</div>
    </form>
  );
};

export { Form };
