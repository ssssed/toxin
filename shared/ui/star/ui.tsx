import cn from 'classnames';
import { FC } from 'react';

import { STARS } from './constants';
import './style.scss';
import type { StarType } from './types';

const Star: FC<StarType> = ({ rating }) => {
	return (
		<div className='stars'>
			{STARS.map(star => (
				<span
					key={star}
					className={cn('star', {
						star_active: star <= rating
					})}
				></span>
			))}
		</div>
	);
};

export { Star };
