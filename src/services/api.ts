const baseUrl = "https://staging.api.tubotones.com/api";

export const sendRequest = async (path: string) => {
	const url = `${baseUrl}${path}`;

	const request = await fetch(url, {
		headers: {
			"Content-Type": "application/json"
		}
	});

	return await request.json();
};

export const getRequest = async (path: string) => {
	const user = localStorage.getItem("auth-user");

	const token = user && JSON.parse(user).access_token;

	const url = `${baseUrl}${path}`;

	const request = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			...(user && { authorization: `Bearer ${token}` })
		}
	});

	return await request.json();
};

export const postRequest = async (path: string, body: Record<string, string>) => {
	const user = localStorage.getItem("auth-user");

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

	return await request.json();
};
