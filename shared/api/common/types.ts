import { Gender } from "@prisma/client";

export interface RegisterData {
    email: string;
    name: string;
    lastname: string;
    password: string;
    sex: Gender;
    date_birthday: Date | null;
    is_accept_special_demand: boolean;
}