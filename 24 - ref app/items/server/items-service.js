'use strict';

const STORAGE_KEY = 'items';

function service(storage, quotes) {

	const theService = {

		getQuote: async function (user) {
			if (!user) {
				throw { cause: 'unauthenticated', message: 'User unauthenticated.' };
			}
			
			if (!user.canGetQuote) {
				throw { cause: 'unauthorized', message: 'User cannot get quotes.' };
			}
			
			return quotes.get();
		},

		getAllItems: async function (user) {
			if (!user) {
				throw { cause: 'unauthenticated', message: 'User unauthenticated.' };
			}
			
			if (!user.canList) {
				throw { cause: 'unauthorized', message: 'User cannot list items.' };
			}

			// get data from storage
			return (await storage.search(STORAGE_KEY)) || [];
		},
		
		createItem: async function (user, item) {
			if (!user) {
				throw { cause: 'unauthenticated', message: 'User unauthenticated.' };
			}
			
			if (!user.canInsert) {
				throw { cause: 'unauthorized', message: 'User cannot add items.' };
			}

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
