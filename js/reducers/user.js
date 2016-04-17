/**
 * @flow
 */

'use strict';

import type {Action} from '../actions/types';

/*export type State = {
  isLoggedIn: boolean;
  id: ?string;
  name: ?string;
};
*/
const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
};

const user = (state = initialState, action) => {
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      id: null,
      name: null,
    };
  }
  return state;
}

/*function user(state = initialState, action) {
  if (action.type === 'LOGGED_IN') {
    let {id, name, sharedSchedule} = action.data;
    if (sharedSchedule === undefined) {
      sharedSchedule = null;
    }
    return {
      isLoggedIn: true,
      hasSkippedLogin: false,
      sharedSchedule,
      id,
      name,
    };
  }
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      id: null,
      name: null,
    };
  }
  return state;
}*/

module.exports = user;
