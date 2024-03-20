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

    if(accounts) {
        console.log(Object.values(accounts))
    }
    
	return (        
		<div>
            <p> chet </p>
		</div>
	);
}