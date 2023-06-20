'use client';

import { FC } from 'react';
import './style.scss';

const Button: FC<Button> = ({
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

export default Button;
