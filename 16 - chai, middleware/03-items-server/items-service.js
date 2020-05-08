'use strict';

const STORAGE_KEY = 'items';

function service(storage, quotes) {

	const theService = {

		getQuote: async function () {
			return quotes.get();
		},

		getAllItems: async function () {
			// get data from storage
			return (await storage.search(STORAGE_KEY)) || [];
		},
		
		createItem: async function (item) {
			if (item && item.name) {
				// insert item into storage
				return storage.add(STORAGE_KEY, item.name);
			} else {
				throw 'Invalid request';
			}
		}
		
	};
	
	return theService;
}

module.exports = service;
