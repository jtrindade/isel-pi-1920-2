'use strict';

function longRunning1(arg, done) {
	setTimeout(() => { done(arg + 2); }, 3000);
}

function longRunning2(arg) {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(arg + 2); }, 3000)
	});
}

const promise = longRunning2(3)
promise.then(console.log);

setTimeout(() => {
	promise.then(console.log);
}, 5000);

const fulfilledPromise = Promise.resolve(8);
const rejectedPromise = Promise.reject('FALHA');

console.log('resolved promises:');
fulfilledPromise.then(console.log);
rejectedPromise.catch(console.log);
console.log('----');
