import React, { FC } from 'react';

const ButtonGroups: FC<SelectButtonGroup> = ({ onClear, onApply }) => {
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

export default ButtonGroups;
