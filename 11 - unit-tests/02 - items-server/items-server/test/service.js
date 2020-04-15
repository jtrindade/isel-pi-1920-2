'use strict';

const assert = require('assert');

const serviceCreator = require('../items-service.js');

describe('Service', function () {
	it('should return an empty array', function (done) {
		const storage = {
			search: (key, done) => { done(undefined, undefined); }
		};
		const quotes = null;
		const service = serviceCreator(storage, quotes);
		
		service.getAllItems((err, items) => {
			const res = Array.isArray(items) && items.length == 0;
			assert.equal(res, true);
			done();
		});
	});
});
