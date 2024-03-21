import { lazy } from 'react';

const Home = lazy(() => import("../views/Home.tsx"));
const About = lazy(() => import("../views/About.tsx"));
const Dashboard = lazy(() => import("../views/Dashboard.tsx"));
const NoMatch = lazy(() => import("../views/NoMatch.tsx"));
const SignUp = lazy(() => import("../views/Sign-up.tsx"));
const Login = lazy(() => import("../views/Login.tsx"));
const Account = lazy(() => import("../views/Account.tsx"));

const publicRoutes = [
	{
		path: "/",
		element: <Login />
	},
	{
		path: "/sign-up",
		element: <SignUp />		
	},
]

const protectedRoutes = [
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/about",
				element: <About />

			},
			{
				path: "/dashboard/home",
				element: <Home />
			},
			{
				path: "/dashboard/accounts",
				element: <Account />
			},
		]
	},
]

export const createRouter = (auth: boolean) => [
	...(auth ? protectedRoutes : publicRoutes),
	{
		path: "*",
		element: <NoMatch />
	}
];