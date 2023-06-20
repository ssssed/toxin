import { FC } from 'react';
import './style.scss';

const RadioGroup: FC<RadioGroup> = ({ children }) => {
  return <div className='radio-group'>{children}</div>;
};

export default RadioGroup;
