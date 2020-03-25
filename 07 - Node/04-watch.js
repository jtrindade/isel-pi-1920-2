'use strict';

const fs = require('fs');

const filename = process.argv[2];
if (!filename) {
	throw Error('A filename is required as argument.');
}

fs.access(filename, fs.constants.F_OK, (err) => {
	if (err) {
		watchDir('.', filename);
	} else {
		watchFile(filename);
	}
});

function watchFile(fname) {
	fs.watch(fname, (evt, name) => {
		console.log(`[${fname}] ${evt} ${name}`);
	});
}

function watchDir(dirName, fname) {
	let done = false;
	const dirWatcher = fs.watch(dirName, (evt, name) => {
		if (!done && name === fname) {
			fs.access(fname, fs.constants.F_OK, (err) => {
				if (!done && !err) {
					console.log('Watching', fname);
					done = true;
					dirWatcher.close();
					watchFile(fname);
				}
			});
		}
	});
}
