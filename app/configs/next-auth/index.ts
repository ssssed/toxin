import type { AuthOptions, Awaitable, User as NextUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
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
                // if (!credentials?.email || !credentials.password) return null;

                // const user = await prisma.user.findFirst({
                //     where: {
                //         email: credentials.email
                //     }
                // })

                // if (!user) {
                //     throw new Error("User not found");
                // }

                // const isPasswordCorrect = user?.password === credentials.password

                // if (!isPasswordCorrect) {
                //     throw new Error("Invalid credentials")
                // }

                // const { password, ...userWithOutPassword } = user;
                // return userWithOutPassword;
                return null;

            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            // const userInfo = await prisma.user.findFirst({
            //     where: {
            //         email: session.user.email
            //     }
            // })

            // if (session?.user && userInfo) {
            //     session.user.id = userInfo.id;
            //     session.user.createdAt = userInfo.createdAt;
            //     session.user.date_birthday = userInfo.date_birthday;
            //     session.user.email = userInfo.email;
            //     session.user.is_accept_special_demand = userInfo.is_accept_special_demand;
            //     session.user.lastname = userInfo.lastname;
            //     session.user.name = userInfo.name;
            //     session.user.sex = userInfo.sex;
            //     session.user.updatedAt = userInfo.updatedAt;
            // }
            // return session
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
};