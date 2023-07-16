import { User } from "@prisma/client";
import { ROUTES, http } from "./config";
import { RegisterData } from "./types";

class Api {

    async register(data: RegisterData, cb: (user: User) => void) {
        const response = await http.post(ROUTES.register, data)

        if (response.status === 200) {
            return cb(response.data);
        }

        throw new Error("Пользователь не был создан");
    }

}

export const api = new Api();