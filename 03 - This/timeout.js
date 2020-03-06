'use strict';

setTimeout(function () { console.log('isel'); }, 1000);

/*
for (let i = 0; i < 10; ++i) {
	setTimeout(function () { console.log(i); }, (i + 1) * 1000);
}
*/

/*
for (let i = 9; i >= 0; --i) {
	setTimeout(function () { console.log(i); }, (i + 1) * 1000);
}
*/

const begin = new Date().getTime();
const end = (begin + 5000);
while (new Date().getTime() < end);
