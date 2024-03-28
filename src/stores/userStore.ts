import { create } from "zustand";
import { UserState } from "../types/user";

export const useUserStore = create<UserState>()(set => ({
	name: null,
	lastname: null,
	email: null,
	isAuth: false,
	access_token: null,
	setUser: (data: UserState) =>
		set(() => ({
			name: data.name,
			lastname: data.lastname,
			email: data.email,
			access_token: data.access_token,
			isAuth: true
		})),
	logOut: () => set(() => ({
		name: null,
		lastname: null,
		email: null,
		isAuth: false,
		access_token: null,
	}))
}));
