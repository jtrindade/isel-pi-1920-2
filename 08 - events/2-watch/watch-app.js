'use strict';

const filename1 = process.argv[2];
if (!filename1) {
	throw Error('A filename is required as first argument.');
}

const filename2 = process.argv[3];
if (!filename2) {
	throw Error('A filename is required as second argument.');
}

const filemonCreator = require('./watch.js');
const filemon1 = filemonCreator(filename1);
const filemon2 = filemonCreator(filename2);

filemon1.on(filemon1.CREATED, (...args) => {
	console.log('1: CREATE event emitted', args);
}).on(filemon1.MODIFIED, (...args) => {
	console.log('1: MODIFIED event emitted', args);
});

filemon2.on(filemon2.CREATED, (...args) => {
	console.log('2: CREATE event emitted', args);
}).on(filemon2.MODIFIED, (...args) => {
	console.log('2: MODIFIED event emitted', args);
});
