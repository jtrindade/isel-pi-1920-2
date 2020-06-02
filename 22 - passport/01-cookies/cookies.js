const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => { 
	res.send('ISEL - LEIC - PI'); 
}); 

// This example break several HTTP principles.
// Do not use as inspiration.
app.get('/save', (req, res) => {
	const key = req.query.key;
	const val = req.query.val;
	if (key && val) {
		res.cookie(key, val, { sameSite: true });
		res.send(`SET '${key}' := '${val}'`);
	} else {
		res.status(400).send('Invalid save request.');
	}
});

app.get('/mem', (req, res) => {
	res.send(req.cookies);
});

const PORT = 8888;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))
