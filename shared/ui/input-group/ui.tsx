import { FC } from 'react';
import './style.scss';
import type { InputGroupType } from './types';

const InputGroup: FC<InputGroupType> = ({ children }) => {
  return <div className='input-group'>{children}</div>;
};

export { InputGroup };
