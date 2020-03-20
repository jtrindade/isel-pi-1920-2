function countWords(inputWords) {
	return inputWords.reduce((counters, word) => {
		counters[word] = (counters[word] || 0) + 1;
		return counters;
	}, {});
}

// arg: ctx0
// arg: func
// step 0: func(ctx0, arr[0]) -> ctx1
// step 1: func(ctx1, arr[1]) -> ctx2
// ...
// step n-1 : func(ctx«N-1», arr[n-1]) -> ctxN
// res: ctxN

module.exports = countWords
	