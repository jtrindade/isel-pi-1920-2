const express = require('express');
const session = require('express-session');

const FileStore = require('session-file-store')(session);

const app = express();

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'iselleic',
	store: new FileStore()
}));

app.get('/', (req, res) => { 
	res.send('ISEL - LEIC - PI'); 
}); 

// This example break several HTTP principles.
// Do not use as inspiration.
app.get('/save', (req, res) => {
	const key = req.query.key;
	const val = req.query.val;
	if (key && val) {
		req.session[key] = val;
		res.send(`SET '${key}' := '${val}'`);
	} else {
		res.status(400).send('Invalid save request.');
	}
});

app.get('/mem', (req, res) => {
	res.send(req.session);
});

const PORT = 8888;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))
