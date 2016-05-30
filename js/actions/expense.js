/**
 * @flow
 */

'use strict';

var Parse = require('parse/react-native');
const Expense = Parse.Object.extend("Expense");

function fetchExpense() {
  return (dispatch) => {
    var result = _fetchExpense();
    return result.then((action)=>dispatch(action));
  }
}

async function _fetchExpense() {
  // call api by user
  const expenses = await new Parse.Query("Expense")
      .equalTo("createdBy", Parse.User.current())
      .descending("date")
      .find();

  const action = {
    type: 'EXPENSE_FETCH_SUCCESS',
    data: expenses  
  }; 
  
  return Promise.resolve(action);
}

function createExpense(data) {
  return (dispatch) => {
    console.log("call action createExpense();");

    // add new expense
    let expense = new Expense();
    let expenseData = {
      amount: Number(data.amount),
      category: data.category,
      date: new Date(data.date),
      description: data.description,
      createdBy: Parse.User.current()
    }
    expense.save(expenseData).then(function(object){
      console.log("Add new expense "+object.id);
      console.log("Call reducer expense");
      return dispatch({type: 'EXPENSE_CREATE_SUCCESS'});
    });  
  }
}
 
function updateExpense() {
  return {
    type: 'EXPENSE_UPDATE_SUCCESS'
  };
}

function deleteExpense() {
  return {
    type: 'EXPENSE_DELETE_SUCCESS'
  };
}

export default {
	fetchExpense,
	createExpense,
	updateExpense,
	deleteExpense
}

