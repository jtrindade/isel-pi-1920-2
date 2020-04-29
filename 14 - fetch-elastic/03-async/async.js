'use strict';

function f() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(3), 8000);
	});
}

function sample1() {
	return f().then(value => {
		console.log(value);
		console.log(8);
	});
}

async function sample2() {
	console.log(await f());
	console.log(8);	
}

console.log(":: START ::");
console.log(sample1());
console.log(sample2());
console.log(":: END ::");
