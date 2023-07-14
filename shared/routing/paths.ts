interface IRoomsParams {
    page: string;
}

type Id = number | null | undefined;

export const paths = {
    home: "/",
    login: "/login",
    register: "/register",
    rooms: (params: IRoomsParams): string => {
        const searchParams = new URLSearchParams({ ...params });
        const url = `/rooms?${searchParams}`;

        return url;
    },
    room: (id: Id): string => `/room/${id}`
}