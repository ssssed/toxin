export type Room = {
    id: number,
    type: 'LUXE' | 'DEFAULT' | 'PREMIUM' | 'PRESIDENT',
    number: number,
    created: Date,
    day_price: number,
    is_deleted: boolean,
    services_price: number,
    additional_services_price: number,
    updated: Date,
    "data-wow-delay"?: string | number;
}