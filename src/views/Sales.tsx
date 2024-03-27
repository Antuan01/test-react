import { Suspense, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../services/api";
import { useSalesStore } from "../stores/salesStore";
import SalesRow from "../components/SalesRow";


type SaleType = 1 | 2 | 3 | 0

const parseSaleType = (type: string) : SaleType => {
	switch(type){
		case "pending":
			return 3;
		case "rejected":
			return 1;
		case "verified":
			return 2;
		default: return 0;
	}
}


export default function Sales() {
	const path = useParams();

	const opt: string = `${path.type}`;

	const saleType: SaleType = parseSaleType(opt);

	console.log(opt, saleType)



	const useStoreSetOptions  = (a: SaleType)=> useSalesStore(state => {
		switch(a){
			case 3: return state.setPendingSales;
			case 2: return state.setRejectedSales;
			case 1: return state.setApprovedSales;
			default: return state.setApprovedSales;
		}
	});


	const useDataOptions  = (b: SaleType)=> useSalesStore(state => {
		switch(b){
			case 3: return state.pendingSales;
			case 2: return state.approvedSales;
			case 1: return state.rejectedSales;
			default: return state.rejectedSales;
		}
	});


	const setSalesData = useStoreSetOptions(saleType)

	const salesData = useDataOptions(saleType);

	const getSalesData = useCallback( async () => {
		if(salesData)return;
		getRequest(`/ticket/ticket-bills?opt=${saleType}`)
			.then(data =>  setSalesData(data))
	},[saleType, salesData, setSalesData]);

	useEffect(() => {
		getSalesData()
	},[getSalesData])

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
