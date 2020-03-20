function duckCount() {
	return Array.prototype.reduce.call(arguments, (cnt, arg) => {
		return cnt + (Object.prototype.hasOwnProperty.call(arg, 'quack') ? 1 : 0);
	}, 0);
}

module.exports = duckCount
