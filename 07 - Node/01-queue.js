'use strict';

for (let i = 9; i >= 0; --i) {
	setTimeout(function () { console.log(i); }, (i + 1) * 1000);
}

console.log('Counting...');
