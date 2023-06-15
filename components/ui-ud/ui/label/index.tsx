import { FC } from 'react';
import './style.scss';

const Label: FC<Label> = ({ children }) => {
  return <h3 className='label'>{children}</h3>;
};

export default Label;
