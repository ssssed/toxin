import type { AuthOptions, Awaitable, User as NextUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/configs";

export const authConfig: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
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

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })
                if (user?.password === credentials.password) {
                    const { password, ...userWithOutPassword } = user;
                    return userWithOutPassword as NextUser;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session }) {
            const userInfo = await prisma.user.findFirst({
                where: {
                    email: session.user.email
                }
            })

            if (session?.user && userInfo) {
                session.user.id = userInfo.id;
                session.user.createdAt = userInfo.createdAt;
                session.user.date_birthday = userInfo.date_birthday;
                session.user.email = userInfo.email;
                session.user.is_accept_special_demand = userInfo.is_accept_special_demand;
                session.user.lastname = userInfo.lastname;
                session.user.name = userInfo.name;
                session.user.sex = userInfo.sex;
                session.user.updatedAt = userInfo.updatedAt;
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
    }
};