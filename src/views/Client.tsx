import { Suspense, useCallback, useEffect } from "react";
import { getRequest } from "../services/api";
import { useClientStore } from "../stores/clientStore";
import { ClientData } from "../types/client";

export default function Client() {
	const setClientData = useClientStore(state => state.setData);
	const clientData = useClientStore(state => state.clientData);

	const getData = useCallback( async () => {
		if(clientData) return
		const data = await getRequest("/ticket/ticket-users");
		setClientData(data as ClientData[]);
		console.log("Fetched..");
	},[clientData, setClientData]);

	useEffect(() => {
		getData()
	}, [getData]);

	console.log("Rendered..");
	return (
		<Suspense fallback={<p>...</p>}>
			<div>
				<> {!clientData && <p> chet </p>}</>
				<ul>
					{clientData &&
						clientData.map(acc => (
							<li key={acc.id}>
								{" "}
								{acc?.name} - {acc?.email} - {acc?.telegram_id} -{" "}
								{acc?.total_purchases}{" "}
							</li>
						))}
				</ul>
			</div>
		</Suspense>
	);
}
