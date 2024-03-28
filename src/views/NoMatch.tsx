import { Suspense, useEffect } from "react";
import { useUserStore } from "../stores/userStore.ts";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
	const navigate = useNavigate();
	const auth = useUserStore(state => state.isAuth);

	useEffect(() => {
		if (auth) {
			navigate("/dashboard/sales/pending");
		} else {
			navigate("/");
		}
	});

	return (
		<Suspense fallback={<p> Loading...</p>}>
			<div>
				<h2>Nothing here </h2>
			</div>
		</Suspense>
	);
}
