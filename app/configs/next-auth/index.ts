import axios from 'axios';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// eslint-disable-next-line no-restricted-imports
import { IUser } from '@/app/configs/next-auth/types';

import { ROUTES } from '@/shared/api/common';
import { paths } from '@/shared/routing';

const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			type: 'credentials',
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: {
					label: 'email',
					type: 'email',
					required: true
				},
				name: {
					label: 'Имя',
					type: 'text',
					require: false
				},
				lastname: {
					label: 'Фамилия',
					type: 'text',
					require: false
				},
				birstday: {
					label: 'Дата рождения',
					type: 'date',
					require: false
				},
				password: {
					label: 'password',
					type: 'password',
					required: true
				}
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null;

				const { email, password } = credentials;

				const response = await axios.post(ROUTES.user.auth, {
					email,
					password
				});

				if (response.status !== 200) throw new Error('Пользователь не найден');

				return response.data as IUser;
			}
		})
	],
	pages: {
		signIn: paths.login
	},
	session: {
		strategy: 'jwt'
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);
			return token;
		},
		session: async ({ session, token }) => {
			const user = token.user as IUser;
			session.user = user;
			return session;
		}
	}
};

export default authConfig;
