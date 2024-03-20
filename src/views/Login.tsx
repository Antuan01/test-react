import { useState } from "react";
import { useUserStore, UserState } from "../stores/userStore"
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/api";

export default function Login() {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const setLoginData = useUserStore((state: UserState) => state.setUser)
	const navigate = useNavigate();

	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		e.stopPropagation()
		
		if(password && email) {
			const response = await postRequest('/auth/login', {
				email,
				password
			})

			localStorage.setItem("auth-user", JSON.stringify(response));
			setLoginData(response)
			navigate("/dashboard")
		}
	}

	return (
		<div>
			<form onSubmit={handleLogin}>
				<label> Username: </label>
				<input name="username" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
				<label> Password: </label>
				<input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
				<button type='submit' >Login </button>
			</form>
		</div>
	);
}
