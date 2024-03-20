import { useEffect, useState } from "react";
import { getRequest } from "../services/api";

export default function Account() {
    const [accounts, setAccounts] = useState()

    useEffect(() => {
         const getData = async () => {
            const data = await getRequest('/ticket/ticket-accounts')
            setAccounts(data.data)
        }
        getData()
    }, [])
    
    console.log(accounts)
    
	return (        
		<div>
            {!accounts && <p> chet </p>}
            {accounts && accounts.map(acc => {
                <p> {acc.bank_name} - {acc.account_number} - {acc.account_type} </p>
            })}
		</div>
	);
}