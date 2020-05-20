window.onload = () => {
	const body = "<h1 id='txtMain'></h1>";
	
	document.body.innerHTML = body;
	
	const txtMain = document.querySelector('#txtMain');
	
	/*
	setInterval(() => {
		txtMain.innerHTML = (new Date()).toLocaleString();
	}, 1000);
	*/
	
	window.onhashchange = onHashChange;
	
	if (location.hash) {
		onHashChange();
	} else {
		location.hash = '#home';
	}
	
	function onHashChange() {
		const [view, ...args] = location.hash.substring(1).split('/');
		
		txtMain.innerHTML = `${view}(${args})`;
	}
}