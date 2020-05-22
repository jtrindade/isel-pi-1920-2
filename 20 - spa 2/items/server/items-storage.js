'use strict';

const fetch = require('node-fetch');

function storage(host, port) {
	
	const baseUrl = `http://${host}:${port}`;
	
	const theStorage = {
		
		search: async function (key) {
			try {
				const response = await fetch(`${baseUrl}/${key}/_search`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						size: 100
					})
				});
				
				const answer = await response.json();

				const hits = answer && answer.hits
				                    && answer.hits.hits || [];
				
				const items = hits.map(hit => hit._source.name)
								  .filter(item => item);
				return items;
			} catch (err) {
				return []; // a bad ideia; do not ignore errors.
			}
		},

		add: async function (key, item) {
			try {
				const response = await fetch(`${baseUrl}/${key}/_doc`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": item
					})
				});
				const answer = await response.json();
				return answer._id || -1;
			} catch (err) {
				return -1; // a bad ideia; do not ignore errors.
			}
		}
	};

	return theStorage;
};

module.exports = storage;
