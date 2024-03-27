import { Suspense, useCallback, useEffect } from "react";
import { useSalesStore } from "../stores/salesStore";
import { useParams } from "react-router-dom";
import { getRequest } from "../services/api";

const SaleDetail = () => {
	const path = useParams();
	const opt: number = parseInt(`${path.id}`);

	const data = useSalesStore(state => state.salesData ? state.salesData[opt]: null);
	const setData = useSalesStore(state => state.addSale);
	const all = useSalesStore(state => state)
	console.log(all)

	const getSalesData = useCallback( async () => {
		if(!data)return
		const fetchData = await getRequest(`/ticket/ticket-bills/${opt}`);
		setData({data: fetchData, ids: [opt]});
		console.log("Fetched..");
	},[data, opt, setData]);

	useEffect(() => {
		getSalesData()
	},[opt, getSalesData])

	return (
		<Suspense fallback={<p> Loading... </p>}>
			{!data && <p> Cargando</p>}
			{data && <div className="saleDetail">
				<h2>Sales Details</h2>
				<p> Estado: {data?.status} </p>
				<p> Cliente: </p>
				<p> Nombe: {data?.ticket_user.name} </p>
				<p> Apellido: {data?.ticket_user.lastname} </p>
				<p> Email: {data?.ticket_user.email} </p>
				<p> Telefono: {data?.ticket_user.phone} </p>
				<p> Datos del pago Movil </p>
				<p> CI/Rif: {data?.payment_id} </p>
				<p> Telefono: {data?.payment_number} </p>
				<p> Imagen: {data?.image_url &&
						<img src={data?.image_url}></img>
					}
				</p>
				<p> {data?.event_name} </p>
				<p> Pedido </p>
				<p> Nombre:  {data?.event_name} </p>
				<p> Precio:  {data?.price} </p>
				<p> Cantidad:  {data?.quantity} </p>
				<p> Descripcion:  {data?.event_description} </p>
				<p> Seccion:  {data?.ticket_section} </p>
				<p> Descripcion de Compra:  {data?.description} </p>
				<p> Precio Total:  {data?.total_price} </p>
				<p> Tasa de Cambio:  {data?.dollar_rate} VES</p>
				<p> Total en VES:  {data?.local_amount} </p>
			</div>}
		</Suspense>
	);
}

export default SaleDetail