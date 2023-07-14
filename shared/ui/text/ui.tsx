import { FC } from 'react';
import './style.scss';
import type { TextType } from './types';

const Text: FC<TextType> = ({ children, type = 'default' }) => {
  return (
    <p className={`text ${type !== 'default' && `text_${type}`}`}>{children}</p>
  );
};

export { Text };
