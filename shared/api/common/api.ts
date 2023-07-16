import { User } from "@prisma/client";
import { ROUTES, http } from "./config";
import { ErrorType, RegisterData } from "./types";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";

const callbackError = (error: string) => { }

class Api {

    async register(data: RegisterData, cb: (user: User) => void, cbError = callbackError) {
        try {
            const response = await http.post(ROUTES.register, data)

            if (response.status === 200) {
                cb(response.data);
            }
        } catch (error) {
            const err = error as AxiosError;
            const errorResponse = err.response?.data as ErrorType;
            cbError(errorResponse.message);
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