import { Suspense } from "react";

export default function About() {
	return (
		<Suspense fallback={<p> Loading... </p>}>
			<div>
				<h2>About</h2>
			</div>
		</Suspense>
	);
}
