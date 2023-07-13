import { FC } from 'react';
import './style.scss';

const Form: FC<Form> = ({ children, onSubmit, className = '' }) => {
  return (
    <form
      className={`form ${className}`}
      onSubmit={onSubmit}
    >
      <div className='form__content'>{children}</div>
    </form>
  );
};

export default Form;
