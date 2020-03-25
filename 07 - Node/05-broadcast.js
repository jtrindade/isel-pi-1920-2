'use strict';

const net = require('net');

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

setInterval(() => { broadcast('ISEL - LEIC - PI'); }, 5000);

server.listen(8888);


