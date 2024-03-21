import { create } from "zustand";
import { AccountData, AccountState } from "../types/account";


export const useAccountStore = create<AccountState>()(set => ({
    accountData: null,
	setData: (data: AccountData[]) => set(() => ({		
        accountData: data
	}))
}));