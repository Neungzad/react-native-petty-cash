import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

var Button = require('react-native-button');
var Icon = require('react-native-vector-icons/FontAwesome');
var FBLogin = require('react-native-facebook-login');

import {loginFB} from '../actions';

var Parse = require('parse/react-native');
 
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
      let cuurentuser = Parse.User.currentAsync();
      console.log('componentDidMount');
      console.log(cuurentuser);
    }
 
    onLogin(e) {
      

      //console.log(e);
      let fbData = {
          fbId: "999999", 
          name: "Tester", 
          email: "test@gmail.com"
      }; 

      /*let fbData = {
          fbId: e.profile.id, 
          name: e.profile.name, 
          email: e.profile.email 
      }*/
      
      this.props.onLoginFB(fbData);
    }

    onError(e){
      alert("Login Failed. Please check internet and Try again.");
      console.log(e);
    }

    render() {	
        return (
        	<View style={styles.container}>
            <Text style={styles.headline}>SSS</Text>
            <Text style={styles.subline} onPress={this.onLogin}>Know Your Petty Cash</Text>
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
    onLoginFB: (data) => { dispatch(loginFB(data)) }
  }
}
 
export default connect(select, actions)(Login);
 