import { create } from "zustand";
import { ClientState, ClientData } from "../types/client";

export const useClientStore = create<ClientState>()(set => ({
	clientData: null,
	setData: (data: ClientData[]) =>
		set(() => ({
			clientData: data
		}))
}));
