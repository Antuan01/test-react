import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import '../styles/dashboard.css';

export default function Dashboard() {
	return (
		<Suspense fallback={<p>...</p>}>
			<div className="canvas">
				<div className="slider">
					<h2>Dashboard</h2>
					<Link to="/dashboard/users"> Clientes </Link>
					<Link to="/dashboard/sales/pending"> Ventas Pendientes </Link>
					<Link to="/dashboard/sales/rejected"> Ventas Canceladas </Link>
					<Link to="/dashboard/sales/verified"> Ventas Verificadas </Link>
					<Link to="/dashboard/accounts"> Cuentas </Link>
				</div>
				<div className="child">
					<Outlet />
				</div>
			</div>
		</Suspense>
	);
}
