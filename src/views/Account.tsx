import { useEffect, useState } from "react";
import { getRequest } from "../services/api";
interface AccountData{ 
    bank_name? : string
    account_number?: string
    account_type?: string
}
export default function Account() {
    const [accounts, setAccounts] = useState<AccountData[] | undefined>()

    useEffect(() => {
         const getData = async () => {
            const data = await getRequest('/ticket/ticket-accounts')
            setAccounts(data.data as AccountData[])  
        }
        getData()
    }, [])
    console.log(accounts)
	return (
		<div>
           <> {!accounts && <p> chet </p>}</>
            <ul>
                {accounts && accounts.map(acc =>
                    <li key={acc?.bank_name}> {acc?.bank_name ?? '?'} - {acc?.account_number?? '?' } - {acc?.account_type ?? '?'} </li>
                )}
            </ul>
		</div>
	);
}