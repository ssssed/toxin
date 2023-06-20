import { FC } from 'react';
import './style.scss';

const Text: FC<TextUI> = ({ children }) => {
  return <p className='text'>{children}</p>;
};

export default Text;
