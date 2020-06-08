const errors = require('./errors.js');

function throwError(status, message) {
	switch (status) {
		case 401: throw { cause: errors.UNAUTHENTICATED, message: message };
		case 403: throw { cause: errors.UNAUTHORIZED, message: message };
		case 404: throw { cause: errors.NOT_FOUND, message: message };
		default : throw { cause: errors.ERROR, message: message };
	}
}

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
	},
	
	getQuote: async () => {
		const response = await fetch('/quote');
		
		if (response.status < 400) {
			const body = await response.json();
			return body.quote;
		} else {
			const body = await response.text();
			throwError(response.status, body || response.statusMessage || 'getQuote failed');
		}
	},
	
	getAllItems: async () => {
		const response = await fetch('/items');

		if (response.status < 400) {
			const body = await response.json();
			return body;
		} else {
			const body = await response.text();
			throwError(response.status, body || response.statusMessage || 'getAllItems failed');
		}
	},
	
	addItem: async (itemName) => {
		const response = 
			await fetch('/items', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					name: itemName
				})
			});
		
		if (response.status < 400) {
			return;
		} else {
			const body = await response.text();
			throwError(response.status, body || response.statusMessage || 'addItem failed');
		}
	}
}
