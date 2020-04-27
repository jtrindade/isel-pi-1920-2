'use strict';

function getSchool() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('isel');
		}, 1500);
	});
}

function getYear() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().getFullYear());
		}, 1000);
	});
}

function format(txt) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(txt.toUpperCase());
		}, 2000);
	});
}

function concat(part1, part2) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(part1.toString() + ' - ' + part2.toString());
		}, 1200);
	});
}

// ==========

getSchool()
.then(format)
.then(formattedSchool =>
	getYear().then(year =>
		concat(formattedSchool, year)
	)
)
.then(console.log);

// ==========

const promisedFormattedSchool =
	getSchool()
	.then(format);

const promisedYear =
	getYear();
	
const promisedParts =
	Promise.all([
		promisedFormattedSchool,
		promisedYear
	]);

promisedParts
.then(parts => concat(parts[0], parts[1]))
.then(console.log)

// ==========

Promise.all([
	getSchool().then(format),
	getYear()
])
.then(parts => concat(parts[0], parts[1]))
.then(console.log)

console.log('Computing...');
