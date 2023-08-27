import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// eslint-disable-next-line no-restricted-imports
import { prisma } from '@/app/configs/prisma';

import { paths } from '@/shared/routing';

import { IUser } from './types';

const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
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

				const user = await prisma.user.findFirst({
					where: {
						email: credentials.email
					}
				});

				if (!user) {
					throw new Error('Пользователь не найден');
				}

				const isPasswordCorrect = user?.password === credentials.password;

				if (!isPasswordCorrect) {
					throw new Error('Неправильный логин или пароль');
				}

				const { password, ...credentialsWithOutPassword } = user;
				return credentialsWithOutPassword as IUser;
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
		// jwt: async ({ token, user }) => {
		//     user && (token.user = user)
		//     return token
		// },
		// session: async ({ session, token }) => {
		//     const user = token.user as IUser
		//     session.user = user
		//     return session
		// }
	}
};

export default authConfig;
