'use strict';

const fs = require('fs');

const filename = process.argv[2];
if (!filename) {
	throw Error('A filename is required as argument.');
}

fs.readFile(filename, processFile);
console.log('Reading...');

function processFile(err, data) {
	if (err) {
		console.log('Failed!', err);
		return;
	}
	const content = data.toString();
	console.log('Content:', content);
}
