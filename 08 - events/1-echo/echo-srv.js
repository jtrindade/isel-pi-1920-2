'use strict';

const net = require('net');

const server = net.createServer(connection => {
	console.log(`new connection from ${connection.remoteAddress}:${connection.remotePort}`);
	connection.on('data', data => {
		console.log(`data: ${data.toString()}`);
		connection.write(data.toString());
	}).on('close', () => {
		console.log(`closed connection from ${connection.remoteAddress}:${connection.remotePort}`);
	});
});

server.listen(8888);
