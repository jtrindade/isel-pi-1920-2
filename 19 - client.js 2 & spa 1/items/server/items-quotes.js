'use strict';

const fetch = require('node-fetch');

module.exports = {
	
	get: async function() {
		const response =
			await fetch('http://loripsum.net/api/1/short/plaintext');
		const text = await response.text();
		return text.slice(57, -3);
	}
	
	/*
	get: async () =>
		(await
			(await
				fetch('http://loripsum.net/api/1/short/plaintext')
			).text()
		).slice(57, -3)
	*/
}