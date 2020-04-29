'use strict';

const STORAGE_KEY = 'items';

function service(storage, quotes) {

	const theService = {

		getQuote: function () {
			return quotes.get();
		},

		getAllItems: function () {
			// get data from storage
			return storage.search(STORAGE_KEY).then(items => items || []);
		},
		
		createItem: function (item) {
			if (item && item.name) {
				// insert item into storage
				return storage.add(STORAGE_KEY, item.name);
			} else {
				return Promise.reject('Invalid request', -1);
			}
		}
		
	};
	
	return theService;
}

module.exports = service;
