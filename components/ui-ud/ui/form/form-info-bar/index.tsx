import { FC } from 'react';
import './style.scss';

const FormInfoBar: FC<FormInfoBar> = ({ children }) => {
  return <div className='form__info-bar'>{children}</div>;
};

export default FormInfoBar;
