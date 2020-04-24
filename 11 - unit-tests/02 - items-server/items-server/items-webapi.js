'use strict';

function webapi(app, service) {
	
	const theWebApi = {
	
		getQuote: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getQuote((err, quote) => {
				// send response
				if (!err) {
					const answer = { 'quote': quote };
					
					res.json(answer);
					
				} else {
					// TO DO
				}
				
			});
		},
		
		getAllItems: function (req, res) {
			// get parameters (nothing to do)
			
			// invokes service
			service.getAllItems((err, items) => {
				// send response
				if (!err) {
					const answer = { 'items': items };
					
					res.json(answer);
					
				} else {
					// TO DO
				}
				
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
				service.createItem(item, (err, id) => {
					// send response
					if (!err) {
						const answer = { 'id': id };
						
						res.json(answer);
					} else {
						// TO DO
					}
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
