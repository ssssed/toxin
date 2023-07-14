import { FC, useState } from 'react';
import './style.scss';
import type { SwitchType } from './types';

const Switch: FC<SwitchType> = ({ value, onToggle }) => {
  return (
    <div
      className={`switch  ${value ? 'switch_active' : ''}`}
      onClick={onToggle}
    >
      <div
        className={`switch-circle ${value ? 'switch-circle_active' : ''}`}
      ></div>
    </div>
  );
};

export { Switch };
