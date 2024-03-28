import { Suspense } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import '../styles/dashboard.css';
import { getRequest } from "../services/api";
import { useUserStore } from "../stores/userStore";

export default function Dashboard() {
	const location = useLocation();
	
	console.log(location.pathname);

	const logOut = useUserStore(state => state.logOut)

	const handleLogOut = async () => {
		await getRequest("/auth/logout")
		localStorage.clear();
		logOut()
	}

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
					<div>
						<button onClick={handleLogOut}> Log Out! </button>
					</div>
				</div>
				<div className="child">
					<Outlet />
				</div>
			</div>
		</Suspense>
	);
}
