import { NextPage } from 'next';

import { FilteredRooms } from '@/widgets/filtered-rooms';
import './style.scss';

const RoomsPage: NextPage = () => {
	return (
		<main className='page rooms-page'>
			<FilteredRooms />
		</main>
	);
};

export default RoomsPage;
