import axios from 'axios';

import { IRoomDetailsResponse, IRoomsResponse } from '@/entities/room';

import { ROUTES } from '@/shared/api/common';

export const handleGetRooms = async (page: number) => {
	const { data } = await axios.get<IRoomsResponse>(`${ROUTES.room.all}?page=${page}`);
	return data;
};

export const handleGetRoomDetails = async (id: number) => {
	const { data } = await axios.get<IRoomDetailsResponse>(ROUTES.room.byId(id));
	return data;
};
