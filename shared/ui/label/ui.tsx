import { FC } from 'react';
import './style.scss';
import type { LabelType } from './types';

const Label: FC<LabelType> = ({ children, className }) => {
  return <h3 className={`label ${className}`}>{children}</h3>;
};

export { Label };
