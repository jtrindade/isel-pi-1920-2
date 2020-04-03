'use strict';

const request = require('request');

module.exports = {
	
	get: function (done) {
		/*
		setTimeout(() => {
			done(null, 'hello, world!');
		}, 500);
		*/
		
		request.get('http://loripsum.net/api/1/short/plaintext', 
			(err, res, body) => {
				done(err, body);
			}
		);
	}
	
}