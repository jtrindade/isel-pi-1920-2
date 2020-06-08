require('./style.css');

const auth = require('./auth.js');

window.onload = () => {

	const [mainContainer, userinfo] = setBaseTemplate();

	auth.initialize(userinfo);

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
		
		mod.getView && (mainContainer.innerHTML = mod.getView(request));
		
		mod.run && mod.run(request);
	}

	function setBaseTemplate() {
		const mainTemplate = `
			<nav>
				<div class='navbar'>
					<div class='navigation'>
						<a href='#home'>Home</a> |
						<a href='#quote'>Quote</a> |
						<a href='#insert'>Insert</a> |
						<a href='#list'>List</a> |
						<a href='#contacts'>Contacts</a> |
						<a href='#about'>About</a>
					</div>
					<div id='userinfo'>
					</div>
				</div>
			</nav>
			<hr>
			<div id='mainContainer'></div>
		`;
		
		document.body.innerHTML = mainTemplate;
		
		const mainContainer = document.querySelector('#mainContainer');
		const userinfo = document.querySelector('#userinfo');
		
		return [mainContainer, userinfo];
	}
	
	function getMod(name) {
		const routes = {
			home   : require('./home.js'),
			quote  : require('./quote.js'),
			insert : require('./insert.js'),
			list   : require('./list.js'),
			login  : auth.login,
			logout : auth.logout
		};

		const modDefault = {
			getView: (req) => '<h1>' + req.name + '</h1>',
			run: () => {}
		};

		return routes[name] || modDefault;
	}
	
}
