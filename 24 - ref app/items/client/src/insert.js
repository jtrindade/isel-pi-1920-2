const global = require('./global.js');
const errors = require('./errors.js');
const api = require('./api.js');

module.exports = {
	getView: (req) => `
		<h1><img src='${global.logo}'>Add Item</h1>


		<!-- form action='/items' method='POST' -->
		<div>
			<label for='itemName'>Item: </label>
			<input type='text' id='itemName'>
			<input type='button' id='butInsert' value='Insert'>
		</div>
		<!-- /form -->
	`,
	run: () => {
		const txtItemName = document.querySelector('#itemName');
		const butInsert = document.querySelector('#butInsert');
		
		butInsert.onclick = async () => {
			const itemName = txtItemName.value;
			if (itemName.length == 0) {
				alert('Item is empty.');
				return;
			}
			
			try {
				await api.addItem(itemName);

				setTimeout(() => {
					location.assign('#list');
				}, 1200);

			} catch (err) {
				if (err.cause === errors.UNAUTHENTICATED) {
					location.assign('#login/insert');
				} else {
					alert(`ERROR: ${ err.message || err }`);
				}
			}
		}
	}
};
