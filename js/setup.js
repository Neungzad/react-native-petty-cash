/**
 * @flow
 */

'use strict';

/*var F8App = require('F8App');
var FacebookSDK = require('FacebookSDK');
var Parse = require('parse/react-native');
var React = require('React');
var Relay = require('react-relay');

var { Provider } = require('react-redux');
var configureStore = require('./store/configureStore');

var {serverURL} = require('./env');*/

import React, { Component } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pettyApp from './reducers'
import RootRouter from './RootRouter';

var store = createStore(pettyApp);

function setup(): React.Component {
  /*console.disableYellowBox = true;
  Parse.initialize('oss-f8-app-2016');
  Parse.serverURL = `${serverURL}/parse`;

  FacebookSDK.init();
  Parse.FacebookUtils.init();
  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(`${serverURL}/graphql`, {
      fetchTimeout: 30000,
      retryDelays: [5000, 10000],
    })
  );*/

  class Root extends React.Component {
    
    constructor() {
      super();
     /* this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };*/

    }
    render() {
      /*if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <F8App />
        </Provider>
      );*/
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
