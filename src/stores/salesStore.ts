import { create } from "zustand";

export interface SaleState {}

export interface Sale {}

export const useSalesStore = create<SaleState>()(set => ({
	accountData: null,
	setData: (data: Sale[]) =>
		set(() => ({
			accountData: data
		}))
}));
