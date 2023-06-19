import { FC } from 'react';
import './style.scss';

const InputGroup: FC<InputGroup> = ({ children }) => {
  return <div className='input-group'>{children}</div>;
};

export default InputGroup;
