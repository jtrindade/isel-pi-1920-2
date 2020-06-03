'use strict';

const express = require('express');

function webapi(app, auth, service) {
	
	const theWebApi = {
	
		login: async function (req, res) {
			const userinfo = req.body;
			const username = userinfo.username;
			const password = userinfo.password;
			
			try {
				const user = await auth.getUser(username, password);
				await login(req, user);
				
				res.json({ user: username });
			} catch (err) {
				res.status(401).send({ error: err });
			}
			
			function login(req, user) {
				return new Promise((resolve, reject) => {
					req.login(user, (err, result) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
					});
				});
			}
		},
	
		logout: function (req, res) {
			req.logout();
			res.send();
		},
	
		getUser: function (req, res) {
			const username = req.isAuthenticated() && req.user.username;
			
			if (username) {
				res.json({ user: username });
			} else {
				res.status(404).send();
			}
		},
	
		getQuote: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getQuote(req.isAuthenticated() && req.user)
			.then(quote => {
				// send response
				const answer = { 'quote': quote };
				
				res.json(answer);
			})
			.catch(err => {
				switch (err.cause) {
					case 'unauthenticated': 
						res.status(401).send(err.message);
						break;
					case 'unauthorized': 
						res.status(403).send(err.message);
						break;
					default: 
						res.status(400).send(err);
				}
			})
		},
		
		getAllItems: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getAllItems(req.isAuthenticated() && req.user)
			.then(items => {
				// send response
				const answer = { 'items': items };
				
				res.json(answer);
			})
			.catch(err => {
				switch (err.cause) {
					case 'unauthenticated': 
						res.status(401).send(err.message);
						break;
					case 'unauthorized': 
						res.status(403).send(err.message);
						break;
					default: 
						res.status(400).send(err);
				}
			});
		},
		
		createItem: function (req, res) {
			
			const item = req.body;
			
			// invokes service
			service.createItem(req.isAuthenticated() && req.user, item)
			.then(id => {
				// send response
				const answer = { 'id': id };
				
				res.json(answer);
			})
			.catch(err => {
				switch (err.cause) {
					case 'unauthenticated': 
						res.status(401).send(err.message);
						break;
					case 'unauthorized': 
						res.status(403).send(err.message);
						break;
					default: 
						res.status(400).send(err);
				}
			});
		}	
	};

	app.post('/login', theWebApi.login);
	app.post('/logout', theWebApi.logout);
	app.get('/user', theWebApi.getUser);

	app.get('/quote', theWebApi.getQuote);
	app.get('/items', theWebApi.getAllItems);
	app.post('/items', theWebApi.createItem);
	
	return theWebApi;
}

module.exports = webapi;
