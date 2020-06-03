module.exports = {

	getUser: async () => {
		const u = await (await fetch('/user')).json();
		console.log(u);
		return u.user;
	},

	login: async (username, password) => {
		const response = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				'username': username,
				'password': password
			})
		})
		
		const body = await response.json();

		if (body && body.user) {
			return body.user;
		} else {
			throw body.error;
		}
	},

	logout: async () => {
		const response = await fetch('/logout', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			}
		})
		
		if (response.status == 200) {
			return;
		} else {
			throw 'Logout failed';
		}
	}
}
