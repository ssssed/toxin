import { FC } from 'react';
import './style.scss';
import { TitleType } from './types';

const Title: FC<TitleType> = ({ children }) => {
  return <h1 className='title'>{children}</h1>;
};

export { Title };
