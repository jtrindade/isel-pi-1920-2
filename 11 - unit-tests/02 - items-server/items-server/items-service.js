'use strict';

const STORAGE_KEY = 'items';

function service(storage, quotes) {

	const theService = {

		getQuote: function (done) {
			quotes.get((err, quote) => {
				done(err, quote);
			});
		},

		getAllItems: function (done) {
			// get data from storage
			storage.search(STORAGE_KEY, (err, items) => {
				// invoke done with results
				done(err, items || []);
			});
		},
		
		createItem: function (item, done) {
			if (item && item.name) {
				// insert item into storage
				storage.add(STORAGE_KEY, item.name, (err, id) => {
					// invoke done with result
					done(err, id);
				});
			} else {
				setImmediate(() => { done('Invalid request', -1); });
			}
		}
		
	};
	
	return theService;
}

module.exports = service;
