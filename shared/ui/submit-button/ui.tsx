import { FC } from 'react';
import './style.scss';
import Image from 'next/image';
import type { SubmitButtonType } from './types';

const SubmitButton: FC<SubmitButtonType> = ({
  children,
  className = '',
  onClick = e => {},
}) => {
  return (
    <button
      className='submit-button'
      onClick={onClick}
    >
      <span>{children}</span>
      <Image
        src='/arrow.svg'
        alt='arrow'
        width={15}
        height={15}
      />
    </button>
  );
};

export { SubmitButton };
