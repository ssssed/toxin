'use client';

import { FC } from 'react';
import './style.scss';

const Star: FC<Start> = ({ rating }) => {
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

export default Star;
