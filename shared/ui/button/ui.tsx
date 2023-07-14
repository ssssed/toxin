import { FC } from 'react';
import './style.scss';
import type { ButtonType } from './types';

const Button: FC<ButtonType> = ({
  children,
  onClick = () => {},
  className,
  type,
}) => {
  return (
    <button
      type='button'
      className={`button ${
        type === 'painted' && 'button_painted'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
