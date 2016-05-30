/**
 * @flow
 */

'use strict';

const initialState = {
	isCreated: false,
	isLoaded: false
};

const expense = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPENSE_CREATE_SUCCESS' :    	
    	return { isCreated: true };

    case 'EXPENSE_FETCH_SUCCESS' :
   		//const result = action.data.map(fromParseObject);
      const result = groupExpenseList(action.data)
    	/*for(let i in action.data) {
    		var object = action.data[i];
    		console.log(object.get('amount'));
    	}*/
    	return {
    		isLoaded: true,
    		expenseList: result
    	}
  }

  return state;
}

function groupExpenseList(rows) {
  const dataList = [];
  const dataExpense = [];
  var previousRow = '';
  for(let i in rows) {
    if (previousRow) {  }

    let object = rows[i];
    let data = {
      "cateName": object.get('category'),
      "price": object.get('amount') 
    } 
    // [object.get('date').getSeconds()]
    dataList.push(data);

    previousRow = object;
  }

  return dataList;
}

function fromParseObject(object) {
  return {
    id: object.id,
    date: object.get('date'),
    amount: object.get('amount'),
    category: object.get('category'),
    description: object.get('description'),
  };
}

module.exports = expense;
