window.onload = () => {

	const mainContainer = setBaseTemplate();

	window.onhashchange = onHashChange;
	
	if (location.hash) {
		onHashChange();
	} else {
		location.hash = '#home';
	}
	
	function onHashChange() {
		const [modName, ...args] = location.hash.substring(1).split('/');
		
		const mod = getMod(modName);
		
		const request = { 'name': modName, 'args': args };
		
		mainContainer.innerHTML = mod.getView(request);
		
		mod.run(request);
	}
	
	function setBaseTemplate() {
		const mainTemplate = `
			<nav>
				<a href='#home'>Home</a> |
				<a href='#quote'>Quote</a> |
				<a href='#insert'>Insert</a> |
				<a href='#list'>List</a> |
				<a href='#contacts'>Contacts</a> |
				<a href='#about'>About</a> |
			</nav>
			<hr>
			<div id='mainContainer'></div>
		`;
		
		document.body.innerHTML = mainTemplate;
		
		return document.querySelector('#mainContainer');
	}
	
	function getMod(name) {
		const routes = {
			home   : modHome,
			quote  : modQuote,
			insert : modInsert,
			list   : modList
		};

		const modDefault = {
			getView: (req) => '<h1>' + req.name + '</h1>',
			run: () => {}
		};

		return routes[name] || modDefault;
	}
	
}
