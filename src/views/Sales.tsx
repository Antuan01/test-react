import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../services/api";
import { useSalesStore } from "../stores/salesStore";

export default function Sales() {
	const setSalesData = useSalesStore(state => state.setPendingSales);
	const salesData = useSalesStore(state => state.pendingSales)
	const path = useParams();

	const opt: string = `${path.type}`;

	const parseSaleType = (type: string) => {
		switch(type){
			case "pending":
				return 3;
			case "rejected":
				return 1;
			case "verified":
				return 2;
		}
	}

	const getSalesData = async () => {
		const data = await getRequest(`/ticket/ticket-bills?opt=${parseSaleType(opt)}`);
		setSalesData(data );
		console.log("Fetched..");
	};

	useEffect(() => {
		if(salesData) {
			return
		} else {
			getSalesData()
		}
	},[])

	console.log(salesData)
	return (
		<Suspense fallback={<p> Loading... </p>}>
			<div>
				<h2>Home</h2>
				<p> { path.type }</p>
				<p> { parseSaleType(opt) }</p>
				<p> {!salesData && "chet" } </p>
				<ul>
					{salesData &&
						salesData.ids.map(acc => (
							<li key={acc}> 
								<p> {acc} </p>
							</li>
						))}
				</ul>
			</div>
		</Suspense>
	);
}
