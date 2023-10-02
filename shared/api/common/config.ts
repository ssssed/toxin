const PREFIX = '/api';
const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:8000/api';
const API = (path: string) => `${BASE_API_URL}/${path}`;

export const ROUTES = {
	register: `${PREFIX}/user`,
	auth: 'credentials',
	user: {
		auth: API('user/auth'),
		register: API('user')
	},
	room: {
		all: API('room'),
		byId: (roomId: number) => API(`room/${roomId}`)
	},
	comment: {
		byRoomId: (roomId: number) => API(`comment?roomId=${roomId}`),
		create: API('comment')
	}
};

export const BASE_URL = process.env.BASE_URL + PREFIX;
