const global = require('./global.js');
const errors = require('./errors.js');
const api = require('./api.js');

module.exports = {
	getView: (req) => `
		<h1><img src='${global.logo}'>Quote</h1>

		<p id='quoteP'></p>
	`,
	run: async (req) => {
		const quoteP = document.querySelector('#quoteP');
		
		try {
			quoteP.innerHTML = await api.getQuote();
		} catch (err) {
			if (err.cause === errors.UNAUTHENTICATED) {
				location.assign('#login/quote');
			} else {
				quoteP.innerHTML = `ERROR: ${ err.message || err }`;
			}
		}
	}
};
