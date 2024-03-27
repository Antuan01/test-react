import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../services/api";
import { useSalesStore } from "../stores/salesStore";
import SalesRow from "../components/SalesRow";

export default function Sales() {
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
			default: 
				return 0;
		}
	}

	const saleType: number = parseSaleType(opt);

	console.log(opt, saleType)
	const storeSetOptions = (a: number) => {
		switch (a) {
			case 3:
				return useSalesStore(state => state.setPendingSales);
			case 1:
				return useSalesStore(state => state.setRejectedSales);
			case 2:
				return useSalesStore(state => state.setApprovedSales);
		}
	}

	const dataOptions = (b: number) => {
		switch (b) {
			case 3:
				return useSalesStore(state => state.pendingSales);
			case 1:
				return useSalesStore(state => state.rejectedSales);
			case 2:
				return useSalesStore(state => state.approvedSales);
		}
	}

	const setSalesData = storeSetOptions(saleType)

	const salesData = dataOptions(saleType);

	const getSalesData = async () => {
		const data = await getRequest(`/ticket/ticket-bills?opt=${saleType}`);
		setSalesData(data);
		console.log("Fetched..");
		
	};

	useEffect(() => {
		if(salesData) {
			return
		} else {
			getSalesData()
		}
	},[opt])

	return (
		<Suspense fallback={<p> Loading... </p>}>
			<div>
				<h2>{ path.type } Sales</h2>
				<p> {!salesData && "chet" } </p>
					{salesData &&
						salesData.map((el, i) => <SalesRow id={el} key={i}/>)}
			</div>
		</Suspense>
	);
}
