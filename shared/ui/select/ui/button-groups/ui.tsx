import React, { FC } from 'react';
import type { SelectButtonGroupType } from './types';

const ButtonGroups: FC<SelectButtonGroupType> = ({ onClear, onApply }) => {
  return (
    <div className='select__buttons'>
      <button
        className='select__button'
        onClick={onClear}
      >
        очистить
      </button>
      <button
        className='select__button'
        onClick={onApply}
      >
        применить
      </button>
    </div>
  );
};

export { ButtonGroups };
