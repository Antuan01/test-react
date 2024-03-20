import { Suspense, lazy } from 'react';

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
		element: (
			<Suspense fallback={<p>...</p>}>
				<Login />
			</Suspense>
		)
	},
	{
		path: "/sign-up",
		element: (
			<Suspense fallback={<p>...</p>}>
				<SignUp />
			</Suspense>
		)
	},

]

const protectedRoutes = [
	{
		path: "/dashboard",
		element: (
			<Suspense fallback={<p>...</p>}>
				<Dashboard />
			</Suspense>
		),
		children: [
			{
				path: "/dashboard/about",
				element: (
					<Suspense fallback={<p>...</p>}>
						<About />
					</Suspense>
				)
			},
			{
				path: "/dashboard/home",
				element: (
					<Suspense fallback={<p>...</p>}>
						<Home />
					</Suspense>
				)
			},
			{
				path: "/dashboard/accounts",
				element: (
					<Suspense fallback={<p>...</p>}>
						<Account />
					</Suspense>
				)
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