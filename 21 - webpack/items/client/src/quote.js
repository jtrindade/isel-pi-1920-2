const global = require('./global.js');

module.exports = {
	getView: (req) => `
		<h1><img src='${global.logo}'>Quote</h1>

		<p id='quoteP'></p>
	`,
	run: async (req) => {
		const quoteP = document.querySelector('#quoteP');
		
		quoteP.innerHTML = (await (await fetch('/quote')).json()).quote;
	}
};
