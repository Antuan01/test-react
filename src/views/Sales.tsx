import { Suspense } from "react";
import { useParams } from "react-router-dom";

export default function Sales() {
	const path = useParams();
	console.log(path.type);

	return (
		<Suspense fallback={<p> Loading... </p>}>
			<div>
				<h2>Home</h2>
			</div>
		</Suspense>
	);
}
