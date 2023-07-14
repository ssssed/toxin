import { FC } from 'react';
import './style.scss';
import type { SubtitleType } from './types';

const Subtitle: FC<SubtitleType> = ({ children }) => {
  return <h2 className='subtitle'>{children}</h2>;
};

export { Subtitle };
