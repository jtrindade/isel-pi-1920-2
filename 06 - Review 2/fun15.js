function loadUsers(userIds, load, done) {
	const users = [];
	let counter = 0;
	userIds.forEach((id, idx) => {
		load(id, user => {
			users[idx] = user;
			if (++counter === userIds.length) {
				done(users);
			}
		});
	});
}

module.exports = loadUsers
