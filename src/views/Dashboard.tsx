import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {

	return (
		<div>
			<h2>Dashboard</h2>
			<Link to="/dashboard/about"> 1 </Link>
			<Link to="/dashboard/home"> 2 </Link>
			<Link to="/dashboard/accounts"> 3 </Link>
			<Outlet />
		</div>
	);
}