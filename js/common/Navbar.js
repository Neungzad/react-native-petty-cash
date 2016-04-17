import React, {Component, StyleSheet, Text, View, ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';

export default class Navbar extends React.Component {
  static defaultProps = {
    title: '',
    lTitle: '',
    lHandler: () => Actions.pop(),
    rTitle: '',
    rHandler: () => ({})
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const titleConfig = {
			title: this.props.title,
		};

		const leftButtonConfig = {
			title: this.props.lTitle,
			handler: () => this.props.lHandler(),
			tintColor: '#900',
		};

		const rightButtonConfig = {
			title: this.props.rTitle,
			handler: () => this.props.rHandler(),
			tintColor: '#900',
		};		

    return (
			<NavigationBar
			    title={titleConfig}
			    leftButton={leftButtonConfig} 
			    rightButton={rightButtonConfig} 
			    tintColor='#EEE'
			    style={styles.navBar} />  
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  }
});