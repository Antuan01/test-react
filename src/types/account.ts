export interface AccountData {
    id: number;
    bank_name: string;
    account_number: string;
    account_type: string;
    owner_full_name: string;
    owner_identification: string;
}

export interface AccountState  {
    accountData: AccountData[] | null;
	setData: (data: AccountData[]) => void;
}