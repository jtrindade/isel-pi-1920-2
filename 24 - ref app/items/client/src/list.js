const global = require('./global.js');
const errors = require('./errors.js');
const api = require('./api.js');

const Handlebars = require('handlebars');

const modListContentsTemplate =  
	Handlebars.compile(`	
		<ul>
			{{#each items}}
				<li>{{this}}</li>
			{{/each}}
		</ul>
	`);

module.exports = {
	getView: (req) => `
		<h1><img src='${global.logo}'>Items List</h1>

		<div id='itemsContainer'></div>	
	`,
	run: async () => {
		const itemsContainer = document.querySelector('#itemsContainer');

		try {
			const answer = await api.getAllItems();

			itemsContainer.innerHTML =
				modListContentsTemplate(answer);

		} catch (err) {
			if (err.cause === errors.UNAUTHENTICATED) {
				location.assign('#login/list');
			} else {
				itemsContainer.innerHTML = `ERROR: ${ err.message || err }`;
			}
		}
	}
};
