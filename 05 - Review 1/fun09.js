const slice = Array.prototype.slice

function logger(namespace) {
	return function() {
		const args = slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(console, args);
	}
}

module.exports = logger
