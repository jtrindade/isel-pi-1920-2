'use strict';

const DEFAULT_PORT = 8888;

const PORT = process.argv[2] || DEFAULT_PORT;

const express = require('express');
const app = express();

const storage = require('./items-storage.js');
const quotes = require('./items-quotes.js');

const serviceCreator = require('./items-service.js');
const webapiCreator = require('./items-webapi.js');

const service = serviceCreator(storage, quotes);
const webapi = webapiCreator(app, service);

app.listen(PORT);
