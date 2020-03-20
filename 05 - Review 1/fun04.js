function getShortMessages(objs) {
	return objs.filter(e => e.message.length < 50).map(e => e.message);
}

module.exports = getShortMessages
