'use strict';

function longRunning1(arg, done) {
	setTimeout(() => { done(arg + 2); }, 3000);
}

function longRunning2(arg) {
	const eventualResult = {
		res: undefined,
		continuation: undefined,
		continueWith: function (done) {
			if (this.res) {
				setImmediate(() => done(this.res));
			} else {
				this.continuation = done;
			}
		},
		fulfill: function (r) {
			this.res = r;
			if (this.continuation) {
				setImmediate(() => this.continuation(r));
			}
		}
	}
	setTimeout(() => { 
		const r = arg + 2;
		// publish result ???
		eventualResult.fulfill(r);
	}, 5000);
	return eventualResult;
}

longRunning1(2, console.log);

const er = longRunning2(5);
er.continueWith(console.log);

longRunning2(7).continueWith(console.log);

const er2 = longRunning2(9);
setTimeout(() => { 
	er2.continueWith(console.log);
}, 7000);
