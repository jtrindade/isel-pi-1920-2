'use strict';

const PORT = 8888;

const express = require('express');


const app = express();

app.get('/', (req, rsp) => {
	console.log(':: APP / ::');
	rsp.send('APP');
})

app.get('/items', (req, rsp) => {
	console.log(':: APP /items ::');
	rsp.send('APP/ITEMS');
})


const admin = express();

admin.get('/', (req, rsp) => {
	console.log(':: ADMIN / ::');
	rsp.send('ADMIN');
})

admin.get('/manage', (req, rsp) => {
	console.log(':: APP /manage ::');
	rsp.send('APP/MANAGE');
})

app.listen(PORT);
admin.listen(PORT+1);
