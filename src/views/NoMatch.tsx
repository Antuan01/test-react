import { useEffect } from "react";
import { useUserStore } from "../stores/userStore.ts";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
	const navigate = useNavigate();
	const auth = useUserStore((state) => state.isAuth)

	useEffect( () => {
		if (auth) {
			navigate("/dashboard")
		} else {
			navigate("/")
		}
	})

	return (
		<div>
			<h2>Nothing here </h2>
		</div>
	);
}
