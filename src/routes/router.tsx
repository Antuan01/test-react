/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Client = lazy(() => import("../views/Client.tsx"));
const Dashboard = lazy(() => import("../views/Dashboard.tsx"));
const NoMatch = lazy(() => import("../views/NoMatch.tsx"));
const SignUp = lazy(() => import("../views/Sign-up.tsx"));
const Login = lazy(() => import("../views/Login.tsx"));
const Account = lazy(() => import("../views/Account.tsx"));
const Sales = lazy(() => import("../views/Sales.tsx"));
const SaleDetail = lazy(() => import("../views/SaleDetail.tsx"));

const publicRoutes = [
	{
		path: "/",
		element: <Login />
	},
	{
		path: "/sign-up",
		element: <SignUp />
	}
];

const protectedRoutes = [
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/users",
				element: <Client />
			},
			{
				path: "/dashboard/sales/:type",
				element: <Sales />
			},
			{
				path: "/dashboard/accounts",
				element: <Account />
			},
			{
				path: "/dashboard/sale/:id",
				element: <SaleDetail />
			}
		]
	}
];

export const createRouter = (auth: boolean) => [
	...(auth ? protectedRoutes : publicRoutes),
	{
		path: "*",
		element: <NoMatch />
	}
];
