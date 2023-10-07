type ImageType = 'PNG' | 'PNG' | 'JPG' | 'JPEG' | 'AVIF' | 'WEBP';
type RoomType = 'LUXE' | 'DEFAULT' | 'PREMIUM' | 'PRESIDENT';
interface IRoomImage {
	id: number;
	link: string;
	type: ImageType;
	created: string;
	updated: string;
	roomId: number;
}

export type Room = {
	id: number;
	type: RoomType;
	number: number;
	day_price: number;
	is_deleted: boolean;
	from_disabled: false;
	services_price: number;
	additional_services_price: number;
	area: number;
	hall_width: number;
	badrooms: number;
	bads: number;
	bathrooms: number;
	created: string;
	updated: string;
	images: IRoomImage[];
};

export interface IMeta {
	page: number;
	totalPage: number;
	nextPage: number;
	prevPage: number;
	elementPerPage: number;
	nextPageLink: string;
	prevPageLink: string;
	totalRooms: number;
}

export interface IRoomsResponse {
	data: Room[];
	meta: IMeta;
}
