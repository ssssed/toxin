const PREFIX = '/api';

export const ROUTES = {
	register: `${PREFIX}/user`,
	auth: 'credentials'
};

export const BASE_URL = process.env.BASE_URL + PREFIX;
