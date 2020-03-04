'use strict';

function makeFunctionAdding(n) {
	return function (v) {
		return v + n;
	}
}

const add3 = makeFunctionAdding(3);
const add7 = makeFunctionAdding(7);
const add8 = makeFunctionAdding(8);

console.log(add3(1));
console.log(add7(1));
console.log(add8(1));

// --------------
console.log('--------');

function getFunc(op, arg) {
	switch (op) {
		case '+': return function (x) { return x + arg; };
		case '*': return function (x) { return x * arg; };
		default:  return function ()  { return 0; };
	};
}

const fa3 = getFunc('+', 3);
const fm5 = getFunc('*', 5);
const fer = getFunc('z', 2);

console.log(fa3(1));
console.log(fm5(2));
console.log(fer(3));

// --------------
console.log('--------');

const console_log = console.log;

const obj = { a: 1, b: 2 };

console.log(obj);

console.log = function () {}

console.log(obj);

console.log = console_log;

// --------------
console.log('--------');

function spy(obj, methodName) {
	const originalMethod = obj[methodName];
	if (!originalMethod) {
		return;
	}
	if (originalMethod.counter) {
		return originalMethod.counter;
	}
	const counter = { count: 0, original: originalMethod };
	function spyingMethod(...args) {
		// increments counter
		counter.count++;
		// invokes the original method
		originalMethod.apply(this, args);
		//originalMethod.call(this, args);
	}
	spyingMethod.counter = counter;
	obj[methodName] = spyingMethod;
	return counter;
}

function unspy(obj, methodName) {
	const originalMethod = obj[methodName];
	if (!originalMethod) {
		return;
	}
	if (originalMethod.counter) {
		obj[methodName] = originalMethod.counter.original;
		delete originalMethod.counter;
	}
}

const consoleLogCounter = spy(console, 'log');

console.log('isel', '2020');
console.log('leic', 8);

const count1 = consoleLogCounter.count;

console.log('pi');

const count2 = consoleLogCounter.count;

console.log(count1);
console.log(count2);

unspy(console, 'log');

// --------------
console.log('--------');

const f = function () {
	console.log('this: ', this, '; args: ', arguments);
}

f('isel', 2020);

const objx = { a: 1, b: 2, m: f };

objx.m('pi', 5);

// --------------
console.log('--------');

const items = [];

const data = {
	vals: items,
	add: items.push
};

console.log(data.vals);
console.log(data);
data.add(3);
console.log(data.vals);
console.log(data);
