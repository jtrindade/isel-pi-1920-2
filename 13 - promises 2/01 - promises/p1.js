'use strict';

function getSchool(cb) {
	setTimeout(() => {
		cb('isel');
	}, 1500);
}

function getYear(cb) {
	setTimeout(() => {
		cb(new Date().getFullYear());
	}, 1000);
}

function format(txt, cb) {
	setTimeout(() => {
		cb(txt.toUpperCase());
	}, 2000);
}

function concat(part1, part2, cb) {
	setTimeout(() => {
		cb(part1.toString() + ' - ' + part2.toString());
	}, 1200);
}

// ==========

getSchool(school => {
	console.log(`Step 1: ${school}`);
	format(school, formattedSchool => {
		console.log(`Step 2: ${formattedSchool}`);
		getYear(year => {
			console.log(`Step 3: ${year}`);
			concat(formattedSchool, year, result => {
				console.log(`Result: ${result}`);
			});
		})
	});
});
