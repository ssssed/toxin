import { FC } from 'react';
import './style.scss';

const Text: FC<TextUI> = ({ children, type = 'default' }) => {
  return (
    <p className={`text ${type !== 'default' && `text_${type}`}`}>{children}</p>
  );
};

export default Text;
