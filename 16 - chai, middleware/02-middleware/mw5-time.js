'use strict';

const PORT = 8888;

const express = require('express');
const app = express();

function calc_time(req, rsp, next) {
	const start = Date.now();
	rsp.on('finish', endRequest);
	next();
	
	function endRequest() {
		const end = Date.now();
		console.log(`request took ${end-start}ms`);
	}
}


app.use(calc_time);

app.get('/', (req, rsp) => {
	console.log(':: APP / ::');
	rsp.send('APP');
})

app.get('/slow', (req, rsp) => {
	console.log(':: APP /slow ::');
	setTimeout(() => {
		rsp.send('APP/ITEMS');
	}, 3000);
})

app.listen(PORT);
