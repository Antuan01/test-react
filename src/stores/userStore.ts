import { create } from "zustand";

export type UserState = {
	name: string | null;
	lastname?: string | null;
	email?: string | null;
	access_token?: string | null;
	isAuth: boolean
	setUser: (data: UserState) => void
}

export const useUserStore = create<UserState>()(set => ({
	name: null,
	lastname: null,
	email: null,
	isAuth: false,
	access_token: null,
	setUser: (data) => set(() => ({		
		name: data.name,
		lastname: data.lastname,
		email: data.email,
		access_token: data.access_token,
		isAuth: true
	}))
}));