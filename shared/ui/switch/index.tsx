import { FC, useState } from 'react';
import './style.scss';

const Switch: FC<Switch> = ({ value, onToggle }) => {
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

export default Switch;
