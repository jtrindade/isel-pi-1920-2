'use strict';

const f = function () {
	console.log('this: ', this, '; args: ', arguments);
}

f('isel', 2020);

const objx = { a: 1, b: 2, m: f };

objx.m('pi', 5);

// --------------
console.log('--------');

function viewCtor(val) {
	console.log(val, val.constructor);
}

viewCtor(3);
viewCtor(false);
viewCtor([1, 2, 3]);
viewCtor({});

// --------------
console.log('--------');

function Point(x, y) {
	this.x = x;
	this.y = y;
	
	//this.show =
	//	function () { console.log(`x: ${x}; y: ${y}`) }
}

Point.prototype.origin = 'isel';
Point.prototype.show =
	function () { console.log(`x: ${this.x}; y: ${this.y}`) }

const p = new Point(3, 4);

p.show();
p.x=5;
p.show();
console.log(p);
console.log(p.x);
console.log(p.y);

viewCtor(p);

const p2 = new Point(7, 8);
p2.origin='iscte';
//p2.origin = p.origin;
console.log(p);
console.log(p2);

// --------------
console.log('--------');

const str = 'LEIC';
console.log(str);

String.prototype.prepend = function (prefix) {
	return prefix + this;
}

const str2 = str.prepend('ISEL: ');
console.log(str2);

// --------------
console.log('--------');

class Point2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	show() {
		console.log(`x: ${this.x}; y: ${this.y}`)
	}
}

const pp = new Point2(3, 4);
console.log(pp);

// --------------
console.log('--------');

const objz = {
	ref: 42,
	proc: function (data) {
		return data.filter(v => v < this.ref);
	},
	proc2: function (data) {
		return data.filter(
			function (v) { return v < this.ref; }
		);
	}
}

const items = [29, -1, 13, 56, 78, 2, 99, -12, 66];
console.log(objz.proc(items));
console.log(objz.proc2(items));






