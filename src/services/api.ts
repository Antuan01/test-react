const baseUrl = "https://staging.api.tubotones.com/api";
const user = localStorage.getItem("auth-user");

export const getRequest = async (path: string) => {
	const token = user && JSON.parse(user).access_token;

	const url = `${baseUrl}${path}`;

	const request = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			...(user && { authorization: `Bearer ${token}` })
		}
	});

	return request.json();
};

export const postRequest = async (path: string, body: Record<string, string>) => {
	const token = user && JSON.parse(user).access_token;

	const url = `${baseUrl}${path}`;

	const request = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...(user && { authorization: `Bearer ${token}` })
		},
		body: JSON.stringify(body)
	});

	return request.json();
};
