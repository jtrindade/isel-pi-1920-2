'use strict';

const net = require('net');
const fs  = require('fs');

const filename = process.argv[2];
if (!filename) {
	throw Error('A filename is required as argument.');
}

const clients = [];

const server = net.createServer(connection => {
	console.log(`new connection from ${connection.remoteAddress}:${connection.remotePort}`);
	clients.push(connection);
});

function broadcast(message) {
	clients.forEach(conn => {
		if (!conn.destroyed) {
			conn.write(message);
			conn.write('\r\n');
		}
	});
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
		broadcast(`[${fname}] ${evt} ${name}`);
	});
}

function watchDir(dirName, fname) {
	let done = false;
	const dirWatcher = fs.watch(dirName, (evt, name) => {
		if (!done && name === fname) {
			fs.access(fname, fs.constants.F_OK, (err) => {
				if (!done && !err) {
					done = true;
					dirWatcher.close();
					watchFile(fname);
				}
			});
		}
	});
}


server.listen(8888);
