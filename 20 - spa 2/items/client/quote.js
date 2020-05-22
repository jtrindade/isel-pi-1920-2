const modQuote = {
	getView: (req) => `
		<h1><img src='images/warehouse.jpg'>Quote</h1>

		<p id='quoteP'></p>
	`,
	run: async (req) => {
		const quoteP = document.querySelector('#quoteP');
		
		quoteP.innerHTML = (await (await fetch('/quote')).json()).quote;
	}
};
