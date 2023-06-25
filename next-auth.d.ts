import { User as DatabaseUser, Gender } from "@prisma/client"
import NextAuth, { DefaultSession, User } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: User
    }

    interface DefaultSession {
        user?: User
        expires: ISODateString
    }

    interface User {
        id: number;
        name: string | null;
        lastname: string | null;
        sex: Gender,
        date_birthday: Date | null;
        is_accept_special_demand: boolean;
        email: string;
        password?: string;
        createdAt: Date;
        updatedAt: Date;
    }

    interface AdapterUser extends User { }
}

declare module 'next-auth/jwt/types' {
    interface JWT {
        id: number;
        name: string | null;
        lastname: string | null;
        sex: Gender,
        date_birthday: Date | null;
        is_accept_special_demand: boolean;
        email: string;
        password?: string;
        createdAt: Date;
        updatedAt: Date;
    }
}