'use strict';

const expect = require('chai').expect;

const serviceCreator = require('../items-service.js');

describe('Service', function () {
	it('should return an empty array', async function () {
		// Arrange
		const storage = {
			search: async (key) => undefined
		};
		const quotes = null;
		const service = serviceCreator(storage, quotes);
		
		// Act
		const items = await service.getAllItems();

		// Assert
		expect(items).to.be.an('array').that.is.empty
	});
});
