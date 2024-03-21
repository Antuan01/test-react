import { Suspense } from "react";

export default function Home() {
	return (
		<Suspense fallback={<p> Loading... </p>}>
			<div>
				<h2>Home</h2>
			</div>
		</Suspense>
	);
}
