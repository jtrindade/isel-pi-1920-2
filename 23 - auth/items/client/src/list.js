const global = require('./global.js');

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
	
		const answer = await (await fetch('/items')).json();

		itemsContainer.innerHTML =
			modListContentsTemplate(answer);
			//arrayToUl(answer.items);
		
		/*
		function arrayToUl(array) {
			let res = '<ul>';
			for (i in array) {
				res += '<li>' + array[i] + '</li>';
			}
			res += '</ul>';
			return res;
		}
		*/
	}
};
