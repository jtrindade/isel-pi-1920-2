'use strict';

const db = {};

module.exports = {
	
	search: function (key) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(db[key]);
			}, 500);
		});
	},

	add: function (key, item) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const coll = db[key] || [];
				coll.push(item);
				db[key] = coll;
				resolve(coll.length - 1);
			}, 200);
		});
	}

};
