module.exports = function arrayMap(arr, fn) {
	return arr.reduce((res, e) => {
		res.push(fn(e));
		return res;
	}, []);
}
