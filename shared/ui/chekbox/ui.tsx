import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';
import type { CheckboxType } from './types';

const Checkbox: FC<CheckboxType> = ({
  name,
  checked = false,
  children = '',
  onChange = () => {},
}) => {
  return (
    <div className='checkbox-container'>
      <label className='checkbox-label'>
        <input
          name={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className='checkbox-input'
        />
        <div className={`checkbox-box ${checked ? 'checkbox-box_active' : ''}`}>
          <CSSTransition
            in={checked}
            timeout={300}
            classNames='checkbox-animation'
            unmountOnExit
          >
            <svg
              className='checkbox-icon'
              viewBox='0 0 24 24'
            >
              <path
                className='checkbox-path'
                d='M4,12 9,17 20,6'
              />
            </svg>
          </CSSTransition>
        </div>
        <div className='checkbox-text'>{children}</div>
      </label>
    </div>
  );
};

export { Checkbox };
