import { FC } from 'react';
import './style.scss';
import type { FormInfoBarType } from './types';

const FormInfoBar: FC<FormInfoBarType> = ({ children }) => {
  return <div className='form__info-bar'>{children}</div>;
};

export { FormInfoBar };
