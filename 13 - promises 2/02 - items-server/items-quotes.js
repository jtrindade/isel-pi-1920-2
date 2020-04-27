'use strict';

const request = require('request');

module.exports = {
	
	get: function () {
		return new Promise((resolve, reject) => {
			request.get('http://loripsum.net/api/1/short/plaintext', 
				(err, res, body) => {
					if (err) {
						reject(err);
					} else {
						resolve(body);
					}
				}
			);
		});
	}
	
}