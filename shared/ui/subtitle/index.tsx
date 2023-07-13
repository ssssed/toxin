import { FC } from 'react';
import './style.scss';

const Subtitle: FC<Subtitle> = ({ children }) => {
  return <h2 className='subtitle'>{children}</h2>;
};

export default Subtitle;
