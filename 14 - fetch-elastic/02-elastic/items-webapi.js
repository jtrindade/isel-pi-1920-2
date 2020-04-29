'use strict';

function webapi(app, service) {
	
	const theWebApi = {
	
		getQuote: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getQuote()
			.then(quote => {
				// send response
				const answer = { 'quote': quote };
				
				res.json(answer);
			})
			.catch(err => {
				// TO DO
			})
		},
		
		getAllItems: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getAllItems()
			.then(items => {
				// send response
				const answer = { 'items': items };
				
				res.json(answer);
			})
			.catch(err => {
				// TO DO
			});
		},
		
		createItem: function (req, res) {
			// get parameters
			let body = '';
			req.on('data', chunk => {
				body += chunk.toString();
			}).on('end', () => {
				const item = JSON.parse(body);
				
				// invokes service
				service.createItem(item)
				.then(id => {
					// send response
					const answer = { 'id': id };
					
					res.json(answer);
				})
				.catch(err => {
					// TO DO
				});
			});
		}	
	};
	
	app.get('/quote', theWebApi.getQuote);
	app.get('/items', theWebApi.getAllItems);
	app.post('/items', theWebApi.createItem);
	
	return theWebApi;
}

module.exports = webapi;
