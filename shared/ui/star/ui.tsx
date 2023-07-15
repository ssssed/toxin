import { FC } from 'react';
import './style.scss';
import type { StarType } from './types';
import { STARS } from './constants';

const Star: FC<StarType> = ({ rating }) => {
  return (
    <div className='stars'>
      {STARS.map(star => {
        let dynamicClass = `star`;
        if (star <= rating) {
          dynamicClass = `star star_active`;
        }
        return (
          <span
            key={star}
            className={dynamicClass}
          ></span>
        );
      })}
    </div>
  );
};

export { Star };
