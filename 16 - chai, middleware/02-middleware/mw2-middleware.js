'use strict';

const PORT = 8888;

const express = require('express');
const app = express();

// middleware
app.use((req, rsp, next) => {
	console.log('.. interceptor 1 ..');
	next();
});

// middleware
app.use('/items',
	(req, rsp, next) => {
		console.log('.. interceptor 2 ..');
		next();
	},
	(req, rsp, next) => {
		console.log('.. interceptor 3 ..');
		next();
	}
);

app.get('/', (req, rsp) => {
	console.log(':: APP / ::');
	rsp.send('APP');
})

app.get('/items', (req, rsp) => {
	console.log(':: APP /items ::');
	rsp.send('APP/ITEMS');
})

app.get('/items/help', (req, rsp) => {
	console.log(':: APP /items/help ::');
	rsp.send('APP/ITEMS/HELP');
})


app.listen(PORT);
