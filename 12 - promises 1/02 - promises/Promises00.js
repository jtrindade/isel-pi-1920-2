'use strict';

function oper1(arg, done) {
	setTimeout(() => { done(arg + 3); }, 3000);
}

function oper2(arg1, arg2, done) {
	setTimeout(() => { done(arg1 + arg2); }, 1500);
}

function oper3(arg, done) {
	setTimeout(() => { done(arg - 1); }, 2000);
}

oper1(3, (res1) => {
	// ...
	oper2(res1, 2, (res2) => {
		// ...
		oper3(res2 + 1, (res3) => {
			// ...
			setTimeout(() => {
				console.log('hello ' + res3);
			}, 1500);
		});
	});
});
