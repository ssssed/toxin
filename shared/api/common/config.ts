import axios from "axios";

const PREFIX = "/api";

export const http = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export const ROUTES = {
    register: `${PREFIX}/user`,
    auth: 'credentials'
}