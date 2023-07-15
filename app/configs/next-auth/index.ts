import { paths } from "@/shared/routing";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

interface IUser extends User {
    id: string;
    name: string;
    email: string;
    lastname: string;
    birstday: string;
    password?: string;
}

const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    required: true,
                },
                name: {
                    label: "Имя",
                    type: "text",
                    require: false,
                },
                lastname: {
                    label: "Фамилия",
                    type: "text",
                    require: false,
                },
                birstday: {
                    label: "Дата рождения",
                    type: "date",
                    require: false,
                },
                password: {
                    label: "password",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials.password) return null;

                if (credentials?.email === "test@test.ru" && credentials.password === "pass123") {
                    const { password, ...credentialsWithOutPassword } = credentials;
                    return credentialsWithOutPassword as IUser;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: paths.login
    },
    session: {
        strategy: "jwt"
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
}

export default authConfig;