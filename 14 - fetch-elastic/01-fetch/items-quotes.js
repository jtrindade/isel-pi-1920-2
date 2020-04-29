'use strict';

const fetch = require('node-fetch');

module.exports = {
	
	get: () => fetch('http://loripsum.net/api/1/short/plaintext')
			     .then(response => response.text())
				 .then(text => text.slice(57, -3))
	
}