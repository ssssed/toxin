import { FC } from 'react';
import './style.scss';

const Title: FC<Title> = ({ children }) => {
  return <h1 className='title'>{children}</h1>;
};

export default Title;
