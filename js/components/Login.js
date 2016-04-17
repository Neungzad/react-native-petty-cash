import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';

var Button = require('react-native-button');
var Icon = require('react-native-vector-icons/FontAwesome');
var FBLogin = require('react-native-facebook-login');

import {serverUrl} from '../env';
import {loginFB} from '../actions';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.onLogin = this.onLogin.bind(this);
    }
 
    onLogin(e) {
      // check and add user name

      /*fetch(serverUrl+"/user", { 
        method: "POST", 
        body: JSON.stringify({
          fb_id: e.profile.id, 
          name: e.profile.name, 
          email: e.profile.email
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        // redirect
        Actions.expenseMenu();
      })
      .done();*/

      this.props.onLoginFB();
    }

    onError(e){
      alert("Login Failed. Please check internet and Try again.");
      console.log(e);
    }

    render() {	
        return (
        	<View style={styles.container}>
            <Text style={styles.headline}>SSS</Text>
            <Text style={styles.subline}>Know Your Petty Cash</Text>
            <FBLogin
                onLogin={this.onLogin}                
                onError={this.onError}                
              />

            <Text> isLoggedIn = {this.props.isLoggedIn ? 'Logged' : 'Not Logged'}</Text>
        	</View> 
        ); 
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  subline: {
    color: '#BBB',
    fontSize: 20,
    marginBottom: 80
  },
  buttonContainer: {
    marginTop: 100, 
  },
  button: {
    fontFamily: 'Arial',
    fontSize: 18, 
    color: 'white'
  }
});

const select = (store) => {
  return {
    isLoggedIn: store.user.isLoggedIn,
  }
}

const actions = (dispatch) => {
  return {
    onLoginFB: () => { dispatch(loginFB()) }
  }
}
 
export default connect(select, actions)(Login);
 