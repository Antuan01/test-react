import { useUserStore } from "./stores/userStore.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRouter } from "./routes/router.tsx";
import { UserState } from "./types/user.ts";

function App() {
	const setLoginData = useUserStore((state: UserState) => state.setUser)
	const user = localStorage.getItem("auth-user");

	if(user) {
		setLoginData(JSON.parse(user))
	}

	const auth = useUserStore((state) => state.isAuth)
	const routes = createRouter(auth)
	const browserRouter = createBrowserRouter(routes)

	console.log("is auth: " + auth)

	return <RouterProvider router={browserRouter}/>
}

export default App;