module.exports = {
	initialize: initialize,
	session: session,
	serializeUser: serializeUser,
	deserializeUser: deserializeUser
}

const AUTH_COOKIE_NAME = "PiAuth"

let userSerializer = (user, done) => {
	done(null, user);
}

let userDeserializer = (userRef, done) => {
	done(null, userRef);
} 

function initialize() {
	return (req, res, next) => {

		req.logIn = function (user, done) {
			userSerializer(
				user,
				(err, userRef) => {
					res.cookie(AUTH_COOKIE_NAME, userRef);
					done(err);
				}
			);
		}
		
		req.logOut = function (done) {
			res.clearCookie(AUTH_COOKIE_NAME);
			done();
		}

		req.isAuthenticated = function () {
			return !!req.cookies[AUTH_COOKIE_NAME];
		}
		
		next();
	}
}

function session() {
	return (req, res, next) => {
		if (req.isAuthenticated()) {
			const userRef = 
				req.cookies[AUTH_COOKIE_NAME];

			userDeserializer(
				userRef,
				(err, user) => {
					if (err) {
						res.status(403).send(
							'Invalid user'
						);
					} else {
						req.user = user;
					}
				}
			);
		}
		
		next();
	}
}

function serializeUser(serializer) {
	userSerializer = serializer;
}

function deserializeUser(deserializer) {
	userDeserializer = deserializer;
}
