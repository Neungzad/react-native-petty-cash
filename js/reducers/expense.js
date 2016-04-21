/**
 * @flow
 */

'use strict';

const initialState = {
	isCreated: false
};

const expense = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPENSE_CREATE_SUCCESS' :    	
    	return { isCreated: true };

  }

  return state;
}

module.exports = expense;
