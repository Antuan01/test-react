export interface SaleRequest {
	data: [Sale];
	ids: [number];
}
export interface SaleState {
	salesData: Sale[] | null;
	pendingSales: number[] | null;
	approvedSales: number[] | null;
	rejectedSales: number[] | null;
	addSale: (data: SaleRequest) => void;
	setPendingSales: (data: SaleRequest) => void;
	setApprovedSales: (data: SaleRequest) => void;
	setRejectedSales: (data: SaleRequest) => void;
}

export interface Sale {
	ticket_section: number;
	ticket_quantity: number;
	description: string;
	id: number;
	ticket_bot_id: number;
	ticket_user_id: number;
	ticket_manager_id: number;
	ticket_section_id: number;
	code: string;
	note: string;
	dollar_price: string;
	dollar_amount: string;
	local_amount: string;
	status: number;
	created_at: string;
	updated_at: string;
	dollar_rate: string;
	payment_id: string;
	payment_number: string;
	zelle_code: string;
	event_name: string;
	event_description: string;
	order_id: string;
	quantity: number;
	price: string;
	total_price: string;
	image_url: string;
	ticket_user: TicketUser;
	image: string;
}

export interface TicketUser {
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
