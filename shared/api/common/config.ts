import axios from "axios";

export const http = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export const ROUTES = {
    register: "/api/user",
    auth: 'credentials'
}