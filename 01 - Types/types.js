const a = 1;

console.log(a);
console.log(typeof a);

const b = 1.5324;

console.log(b);
console.log(typeof b);

const c = 1.5 | 2.5;

console.log(c);

const d = 0xaaaaaaaaaaaaaaa;

console.log(d);
console.log(d.toString(16));

console.log('============');

const e = "ISEL - 'PI'";

console.log(e);
console.log(typeof e);

const f = 'ISEL - "PI"';

console.log(f);
console.log(typeof f);

const g = 'X';

console.log(g);
console.log(typeof g);

const h = `ISEL ${2019 + a}`;

console.log(h);
console.log(typeof h);

console.log('============');

function foo(a1, a2, a3) {
	const x3 = a3 || 88;
	console.log(`a1: ${a1}`);
	console.log(`a2: ${a2}`);
	console.log(`a3: ${a3}`);
	console.log(`x3: ${x3}`);
}
foo(1, 2, 3);
foo(1, 2);
foo(1);
foo();
foo(1, 2, 3, 4, 5, 6);

console.log('============');

const i = [ 1, "ISEL", 'PI', null, 3.0 ];

console.log(`Length: ${i.length}`);
console.log(i);
console.log(typeof i);

console.log('============');

const j = null

console.log(j);
console.log(typeof j);

console.log('============');

const k = { a: 1, b: "ISEL", "c d": 0.0 };

console.log(k);
console.log(typeof k);

console.log('============');

function showProperties(obj) {
	for (let p in obj) {
		const value = obj[p];
		console.log(`${p} : ${value}`)
	}
}

showProperties(k);

console.log('============');

showProperties(i);

console.log('============');

i[88] = 1234;
showProperties(i);
console.log(i.length);

i['a'] = "ISEL";
showProperties(i);
console.log(i.length);

console.log('============');

const m = function (a, b) { return a + b; };

console.log(m);
console.log(typeof m);

console.log('============');

const n = (a, b) => a + b;

console.log(n);
console.log(typeof n);

console.log(n(2, 3))

console.log('============');

const o = i.map(elem => `elem: ${elem}`);

console.log(o)

console.log('============');

function showTrueOrFalse(value) {
	console.log(value ? 'true' : 'false');
}

showTrueOrFalse(false);
showTrueOrFalse(true);
showTrueOrFalse(0);
showTrueOrFalse(1);
showTrueOrFalse(-1);
showTrueOrFalse(1234);
showTrueOrFalse(0.23);
showTrueOrFalse(Infinity);
showTrueOrFalse(-Infinity);
showTrueOrFalse(NaN);
showTrueOrFalse(0/0);
showTrueOrFalse("");
showTrueOrFalse("abc");
showTrueOrFalse(null);
showTrueOrFalse(undefined);
showTrueOrFalse([]);
showTrueOrFalse([1, 2, 3]);
showTrueOrFalse({});
showTrueOrFalse({a:1,b:2,c:3});
showTrueOrFalse(()=>{})


