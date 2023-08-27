import { User } from '@prisma/client';
import { signIn } from 'next-auth/react';

import { ROUTES } from './config';
import { request } from './requestify';
import { RegisterData } from './types';

const callbackError = (error: string) => {
	console.error(error);
};

class Api {
	async register(data: RegisterData, cb: (user: User) => void, cbError = callbackError) {
		try {
			const response = await request.post<RegisterData, User>(ROUTES.register, {
				body: data
			});
			console.log(response);
			if (response.status === 200) {
				cb(response.data);
			}
		} catch (error) {
			cbError(JSON.stringify(error));
		}
	}

	async auth(data: any, cb: () => void, cbError = callbackError) {
		const response = await signIn(ROUTES.auth, data);

		if (response?.error) {
			cbError(response.error);
		} else {
			cb();
		}
	}
}

export const api = new Api();
