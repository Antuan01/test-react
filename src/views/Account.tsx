import { Suspense, useEffect } from "react";
import { getRequest } from "../services/api";
import { AccountData } from "../types/account";
import { useAccountStore } from "../stores/accountStore";

export default function Account() {
	const setAccountData = useAccountStore(state => state.setData);
	const accountData = useAccountStore(state => state.accountData);

	const getData = async () => {
		const data = await getRequest("/ticket/ticket-accounts");
		setAccountData(data.data as AccountData[]);
		console.log("Fetched..");
	};

	useEffect(() => {
		if (accountData) {
			return;
		} else {
			getData();
		}
	}, []);

	console.log("Rendered..");
	return (
		<Suspense fallback={<p>...</p>}>
			<div>
				<> {!accountData && <p> chet </p>}</>
				<ul>
					{accountData &&
						accountData.map(acc => (
							<li key={acc.id}>
								{" "}
								{acc?.owner_full_name} - {acc?.owner_identification} -{" "}
								{acc?.bank_name} - {acc?.account_number} - {acc?.account_type}{" "}
							</li>
						))}
				</ul>
			</div>
		</Suspense>
	);
}
