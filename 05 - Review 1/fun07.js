function reduce(arr, fn, initial) {
	function redc(idx, ctx) {
		if (idx >= arr.length) {
			return ctx;
		}
		const nctx = fn(ctx, arr[idx], idx, arr);
		return redc(idx + 1, nctx);
	}
	return redc(0, initial);
}

module.exports = reduce