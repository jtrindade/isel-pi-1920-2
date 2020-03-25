
function mulSync(a, b) {
	return a * b;
}
console.log('Before mulSync(3,4)');
const ms34 = mulSync(3, 4);
console.log('After mulSync(3,4)');
console.log('ms34', ms34);
console.log();

function mulSyncCb(a, b, done) {
	console.log(`Begin: mulSyncCb(${a},${b})`);
	const res = a * b;
	done(res);
	console.log(`End: mulSyncCb(${a},${b})`);
}
console.log('Before mulSyncCb(4,5)');
mulSyncCb(4, 5, mscb45 => console.log('mscb45', mscb45));
console.log('After mulSyncCb(4,5)');
console.log();

function mulAsyncCb(a, b, done) {
	console.log(`Begin: mulAsyncCb(${a},${b})`);
	const res = a * b;
	setTimeout(() => done(res), 100);
	console.log(`End: mulAsyncCb(${a},${b})`);
}
console.log('Before mulAsyncCb(7,8)');
mulAsyncCb(7, 8, mscb78 => console.log('mscb78', mscb78));
console.log('After mulAsyncCb(7,8)');
