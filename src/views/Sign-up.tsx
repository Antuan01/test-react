import { Suspense } from "react"

export default function SignUp() {
	return (
		<Suspense fallback={<p>...</p>}>
			<div>
				<input />
				<input />
				<button> Sign Up </button>
			</div>
		</Suspense>
	);
}
