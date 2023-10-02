import axios from 'axios';

import { IRoomsResponse } from '@/entities/room';

import { ROUTES } from '@/shared/api/common';

export const handleGetRooms = async (page: number) => {
	const { data } = await axios.get<IRoomsResponse>(`${ROUTES.room.all}?page=${page}`);
	return data;
};
