/**
 * @flow
 */

'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pettyApp from './reducers';
import RootRouter from './RootRouter';
import {serverUrl} from './env';

var Parse = require('parse/react-native');
const store = createStore(
  pettyApp,
  applyMiddleware(thunk)
);

function setup(): React.Component {
  Parse.initialize("petty-sss-app");
  Parse.serverURL = serverUrl; 
  
  class Root extends React.Component {
    constructor() {
      super();
    }
    render() {
      return (
        <Provider store={store}>
          <RootRouter />
        </Provider>
      );
    }
  }
 
  return Root;
}

module.exports = setup;
