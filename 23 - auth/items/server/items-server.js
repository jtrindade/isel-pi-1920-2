'use strict';

const STORAGE_HOST = 'localhost';
const STORAGE_PORT = 9200;

const DEFAULT_PORT = 8888;
const PORT = process.argv[2] || DEFAULT_PORT;

const express = require('express');
const app = express();

app.use(express.json());

const auth = require('./items-auth.js');

auth.initialize(app);

const quotes = require('./items-quotes.js');

const storageCreator = require('./items-storage.js');
const serviceCreator = require('./items-service.js');
const webapiCreator = require('./items-webapi.js');

const storage = storageCreator(STORAGE_HOST, STORAGE_PORT);
const service = serviceCreator(storage, quotes);
const webapi = webapiCreator(app, auth, service);

app.use(express.static('../client/dist'));

app.listen(PORT);
