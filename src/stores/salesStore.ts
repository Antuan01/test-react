import { create } from "zustand";
import { SaleState } from "../types/sales";


export const useSalesStore = create<SaleState>()(set => ({
	salesData: null,
	pendingSales: null,
	approvedSales: null,
	rejectedSales: null,
	addSale(data) {
		set((state) => ({
			salesData: {
				...data.data,
				...state.salesData
			}
		}))
	},
	setPendingSales(data) {
		set((state) => ({
			salesData: {
				...state.salesData,
				...data.data
			},
			pendingSales: data.ids
		}))
	},
	setApprovedSales(data) {
		set((state) => ({
			salesData: {
				...state.salesData,
				...data.data
			},
			approvedSales: data.ids
		}))
	},
	setRejectedSales(data) {
		set((state) => ({
			salesData: {
				...state.salesData,
				...data.data
			},
			rejectedSales: data.ids
		}))
	}
}));
