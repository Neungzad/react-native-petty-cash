/**
 * @flow
 */

'use strict';

var Parse = require('parse/react-native');
const User = Parse.Object.extend("User");

function loginFB(data) {
	return (dispatch) => {
		var result = _loginFB(data);
		return result.then((action)=>dispatch(action));
	}	
}

async function _loginFB(data) {
	// check user exist
	let existUser = await new Parse.Query(User)
			.equalTo("fbId", data.fbId)
			.find();
	if (existUser.length == 0) 
		await _registerUser(data);			
	
	await _login(data.email, data.fbId);
	
	/*Parse.User.logOut().then(() => {
	  var currentUser = Parse.User.current();  // this will now be null
	  console.log("logout la.");
	});*/

	console.log('call return object');
	const action = {
    type: 'LOGGED_IN',
    profile: {
    	fbId: data.fbId, 
      name: data.name, 
      email: data.email
 	 }
	};

  return Promise.resolve(action);
}

async function _login(username, password) {
	return new Promise(function(resolve, reject) {
		Parse.User.logIn(username, password, {
		  success: function(user) {
		    console.log("login success");	 
		    resolve(user);   
		  },
		  error: function(user, error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});
	});
}

async function _registerUser(data) {
	let user = new User();
	user.set("username", data.email);
	user.set("password", data.fbId);
	user.set("email", data.email);
	user.set("fbId", data.fbId);
	user.set("name", data.name);

	return new Promise(function(resolve, reject) {
		user.signUp(null, {
		  success: function(user) {
		    console.log("Add new user "+user.id);
		    resolve();
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});
	});
}



export default {loginFB}

