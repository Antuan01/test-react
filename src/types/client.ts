export interface ClientData {
	id: number;
	username: string;
	telegram_id: string;
	name: string;
	lastname: string;
	email: string;
	phone: string;
	city: string;
	created_at: string;
	updated_at: string;
	messageable: number;
	fullName: string;
	total_purchases: number;
}

export interface ClientState {
	clientData: ClientData[] | null;
	setData: (data: ClientData[]) => void;
}
