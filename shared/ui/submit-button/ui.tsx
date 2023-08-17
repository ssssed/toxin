import { FC } from 'react';
import './style.scss';
import Image from 'next/image';
import type { SubmitButtonType } from './types';

const SubmitButton: FC<SubmitButtonType> = ({
  children,
  className = '',
  onClick = e => {},
  isPending = false,
}) => {
  return (
    <button
      className={`submit-button ${isPending && 'submit-button_disable'}`}
      onClick={onClick}
      disabled={isPending}
    >
      <span>{children}</span>
      <Image
        src={isPending ? '/loading.svg' : '/arrow.svg'}
        alt='arrow'
        width={15}
        height={15}
      />
    </button>
  );
};

export { SubmitButton };
