function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(sUser => goodUsers.some(gUser => gUser.id === sUser.id));
	};
}

module.exports = checkUsersValid