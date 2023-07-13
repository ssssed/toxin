import { FC } from 'react';
import './style.scss';

const Label: FC<Label> = ({ children, className }) => {
  return <h3 className={`label ${className}`}>{children}</h3>;
};

export default Label;
