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

app.use('/images', express.static('files'));

function extract_json_body(req, rsp, next) {
	let body = '';
	req.on('data', chunk => {
		body += chunk.toString();
	}).on('end', () => {
		const obj = JSON.parse(body);
		req.body = obj;
		next();
	});
}

// Use our JSON body extractor...
app.use(extract_json_body);

// ... or the JSON body extractor provided by express.
//app.use(express.json());

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

app.post('/obj', (req, rsp) => {
	const obj_str = JSON.stringify(req.body);
	console.log(`:: APP /obj ${obj_str} ::`)
	rsp.send(`OBJ ${obj_str}`);
})

app.listen(PORT);
