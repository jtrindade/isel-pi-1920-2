const passport = require('passport');

const express = require('express');
const session = require('express-session');

const FileStore = require('session-file-store')(session);

const users = {
	admin: {
		username: 'admin', password: 'admin',
	    canGetQuote: true,  canList: true, canInsert: true
	},
	alpha: {
		username: 'alpha', password: 'beta',
		canGetQuote: true, canList: false, canInsert: false
	},
	isel: {
		username: 'isel',  password: 'leic',
		canGetQuote: false, canList: true, canInsert: true
	},
	guest: {
		username: 'guest', password: '1234',
		canGetQuote: false, canList: true, canInsert: false
	},
}

function userToRef(user, done) {
	done(null, user.username);
}

function refToUser(userRef, done) {
	const user = users[userRef]; 
	if (user) {
		done(null, user);
	} else {
		done('User unknown');
	}
}

module.exports = {
	initialize: app => {
		app.use(session({
			resave: false,
			saveUninitialized: false,
			secret: 'iselleic',
			store: new FileStore()
		}));

		app.use(passport.initialize()); 
		app.use(passport.session()); 
		
		passport.serializeUser(userToRef);
		passport.deserializeUser(refToUser);		
	},
	
	getUser: async (username, password) => {
		const user = users[username];
		if (user && user.password === password) {
			return user;
		}
		throw 'Invalid username or password.';
	}
}
