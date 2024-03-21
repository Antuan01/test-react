export interface UserState {
	name: string | null;
	lastname?: string | null;
	email?: string | null;
	access_token?: string | null;
	isAuth: boolean
	setUser: (data: UserState) => void
}