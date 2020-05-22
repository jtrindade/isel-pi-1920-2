const modInsert = {
	getView: (req) => `
		<h1><img src='images/warehouse.jpg'>Add Item</h1>


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
		
		butInsert.onclick = () => {
			const itemName = txtItemName.value;
			if (itemName.length == 0) {
				alert('Item is empty.');
				return;
			}
			
			fetch('/items', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					name: itemName
				})
			})
			.then(response => { 
				setTimeout(() => {
					location.assign('#list');
				}, 1200);
			})
		}
	}
};
