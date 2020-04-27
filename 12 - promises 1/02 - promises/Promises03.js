'use strict';

function oper1(arg, delay) {
	return new Promise((resolve, reject) => {
		if (arg) {
			setTimeout(() => {
				resolve(8);
			}, 2500 + delay);
		} else {
			setTimeout(() => {
				reject('FALHA');
			}, 4000 + delay);
		}		
	});
}

function oper2(arg) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arg + 3);
		}, 1500);
	});
}

function callOper1(arg, delay) {
	oper1(arg, delay)
	.then(r => { console.log('Succeeded with ' + r); return 'SUCCESS'; })
	.catch(e => { console.log('Failed with ' + e); return 'FAIL'; })
	.then(m => console.log(m));
}

callOper1(1, 0);
callOper1(0, 1000);

oper1(1, 2000)
.then(oper2)
.then(console.log);

Promise.all([
	oper1(1, 3000),
	oper2(12)
]).then(res => { console.log(res[0] + res[1]); });

Promise.race([
	oper1(1, 3000),
	oper2(12)
]).then(res => { console.log(res); });

oper1(0, 4000)
.finally(() => console.log('THE END'));

