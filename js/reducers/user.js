/**
 * @flow
 */

'use strict';

const initialState = {
  isLoggedIn: false,
  fbId: null, 
  name: null, 
  email: null
};

const user = (state = initialState, action) => {
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      profile: {
        fbId: action.profile.fbId, 
        name: action.profile.name, 
        email: action.profile.email
      }
    };
  }
  return state;
}

module.exports = user;
