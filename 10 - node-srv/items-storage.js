'use strict';

const db = {};

module.exports = {
	
	search: function (key, done) {
		setTimeout(() => {
			done(null, db[key]);
		}, 500);
	},

	add: function (key, item, done) {
		setTimeout(() => {
			const coll = db[key] || [];
			coll.push(item);
			db[key] = coll;
			done(null, coll.length - 1);
		}, 200);
	}

};