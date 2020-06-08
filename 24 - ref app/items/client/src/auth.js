const api = require('./api.js');

const global = require('./global.js');

const Handlebars = require('handlebars');

const loggedInTemplate =  
	Handlebars.compile(`	
		<span class='userinfo'>
			User: {{this}} | <a href='#logout'>Logout</a>
		</span>
	`);

const loggedOut =  `
		<span class='userinfo'>
			<a href='#login'>Login</a>
		</span>
	`;

let currUsername = null;
let userInfoBox;

function setCurrentUser(username) {
	currUsername = username;
	userInfoBox.innerHTML = username ?
		loggedInTemplate(username) :
		loggedOut;
}

module.exports = {
	
	initialize: async (userinfo) => {

		userInfoBox = userinfo;
		
		try {
			setCurrentUser(await api.getUser());
		} catch (err) {
			setCurrentUser(null);
		}
		
	},
	
	getCurrentUser: () => currUsername,
	
	login: {
		getView: (req) => `
			<h1><img src='${global.logo}'>Login</h1>


			<div>
				<label for='txtUsername'>Username: </label>
				<input type='text' id='txtUsername'><br>
				<label for='txtPassword'>Password : </label>
				<input type='password' id='txtPassword'><br>
				<input type='button' id='butLogin' value='Login'>
			</div>
		`,
		
		run: (req) => {
			const txtUsername = document.querySelector('#txtUsername');
			const txtPassword = document.querySelector('#txtPassword');
			const butLogin = document.querySelector('#butLogin');
			
			butLogin.onclick = async () => {
				const username = txtUsername.value;
				if (username.length == 0) {
					alert('Username is empty.');
					return;
				}
				const password = txtPassword.value;
				if (password.length == 0) {
					alert('Password is empty.');
					return;
				}
				
				try {
					const user = await api.login(username, password);
					setCurrentUser(user);
					location.assign(`#${ (req.args && req.args[0]) || 'home'}`);
				} catch (err) {
					alert(err);
					txtUsername.value = "";
					txtPassword.value = "";
				}
			}
		}
	},
	
	logout: {
		run: async () => {
			try {
				await api.logout();
			} catch (err) {
				alert(err);
			}
			setCurrentUser(null);
			location.assign('#home');
		}
	}
}
