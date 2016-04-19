/**
 * @flow
 */

'use strict';

var Parse = require('parse/react-native');
const Account = Parse.Object.extend("Account");

function loginFB(data) {
	// check user exist
	let query = new Parse.Query(Account);
	query.equalTo("fbId", data.fbId);
	query.find({
		success: function(accounts){
			if (accounts.length == 0) {
				// Add account to db
				let account = new Account();
				let accountData = {
					fbId: data.fbId, 
			    name: data.name, 
			    email: data.email
				}
				account.save(accountData).then(function(object){
					console.log("Add new account "+object.id);
				});		
			}
		},
		error: function(error) {
		  console.log("Error: " + error.code + " " + error.message);
		}
	})

  return {
    type: 'LOGGED_IN',
    profile: {
    	fbId: data.fbId, 
      name: data.name, 
      email: data.email
    }
  };
}

export default {loginFB}

