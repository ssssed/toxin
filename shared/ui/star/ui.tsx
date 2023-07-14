import { FC } from 'react';
import './style.scss';
import type { StarType } from './types';

const Star: FC<StarType> = ({ rating }) => {
  return (
    <div className='stars'>
      {[...Array(5)].map((_, star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'star_active' : ''}`}
        ></span>
      ))}
    </div>
  );
};

export { Star };
