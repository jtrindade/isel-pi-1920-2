'use strict';

const DEFAULT_PORT = 8888;

const PORT = process.argv[2] || DEFAULT_PORT;

const express = require('express');

const webapi = require('./items-webapi.js');

const app = express();

app.get('/quote', webapi.getQuote);
app.get('/items', webapi.getAllItems);
app.post('/items', webapi.createItem);

app.listen(PORT);
