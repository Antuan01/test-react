import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
	return (
		<Suspense fallback={<p>...</p>}>
			<div>
				<h2>Dashboard</h2>
				<Link to="/dashboard/users"> Clientes </Link>
				<Link to="/dashboard/sales/pending"> Ventas Pendientes </Link>
				<Link to="/dashboard/sales/rejected"> Ventas Canceladas </Link>
				<Link to="/dashboard/sales/verified"> Ventas Verificadas </Link>
				<Link to="/dashboard/accounts"> Cuentas </Link>
				<Link to="/dashboard/sale/1"> View Sale </Link>
				<Outlet />
			</div>
		</Suspense>
	);
}
