'use strict';

const fetch = require('node-fetch');

function storage(host, port) {
	
	const baseUrl = `http://${host}:${port}`;
	
	const theStorage = {
		
		search: function (key) {
			return fetch(`${baseUrl}/${key}/_search`)
				     .then(response => response.json())
					 .then(answer => {
						 const hits = answer && answer.hits && answer.hits.hits || [];
						 const items = hits.map(hit => hit._source.name).filter(item => item);
						 return items;
					 })
					 .catch(err => []); // a bad ideia; do not ignore errors.
		},

		add: function (key, item) {
			return fetch(`${baseUrl}/${key}/_doc`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					"name": item
				})
			})
			.then(response => response.json())
			.then(answer => answer._id || -1)
			.catch(err => -1); // a bad ideia; do not ignore errors.
		}
	};

	return theStorage;
};

module.exports = storage;
