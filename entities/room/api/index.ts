import { request } from '@/shared/api/common';

import { IRoomsResponse } from '../types';

const handleGetRooms = async (page: number) => request.get<IRoomsResponse>(`/api/rooms?page=${page}`);

// const handleCreateRoom = async (room: Room) =>
// 	await prisma.room.create({
// 		data: room
// 	});

// const handleGetRoomById = async (id: number) =>
// 	await prisma.room.findFirst({
// 		where: {
// 			id
// 		}
// 	});

// const handleUpdateRoom = async (room: Room) =>
// 	await prisma.room.update({
// 		data: room,
// 		where: {
// 			id: room.id
// 		}
// 	});

export { handleGetRooms as getAll };
