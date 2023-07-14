import { FC } from 'react';
import './style.scss';
import type { RadioGroupType } from './types';

const RadioGroup: FC<RadioGroupType> = ({ children }) => {
  return <div className='radio-group'>{children}</div>;
};

export { RadioGroup };
