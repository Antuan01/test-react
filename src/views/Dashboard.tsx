import { Suspense } from "react";
import { Outlet, Link, useLocation,  } from "react-router-dom";
import '../styles/dashboard.css';

export default function Dashboard() {
	const location = useLocation();
	console.log(location.pathname)
	return (
		<Suspense fallback={<p>...</p>}>
			<div className="canvas">
				<div className="side">
				    
					<div className="slider">
					
						<h2>Dashboard</h2>
						<Link to="/dashboard/users" className={location.pathname.endsWith("users")? "selected": "" }> Clientes </Link>
						<Link to="/dashboard/sales/pending" className={location.pathname.endsWith("pending")? "selected": "" }> Ventas Pendientes </Link>
						<Link to="/dashboard/sales/rejected" className={location.pathname.endsWith("rejected")? "selected": "" }> Ventas Canceladas </Link>
						<Link to="/dashboard/sales/verified" className={location.pathname.endsWith("verified")? "selected": "" }> Ventas Verificadas </Link>
						<Link to="/dashboard/accounts" className={location.pathname.endsWith("accounts")? "selected": "" }> Cuentas </Link>
					</div>
					<div><img src="https://pbs.twimg.com/media/E75DGhYUYAA-j-I?format=jpg&name=small"></img></div>
				</div>
				<div className="child">
				<div className="child-content">
					<Outlet />
					</div>
				</div>
			</div>
		</Suspense>
	);
}
