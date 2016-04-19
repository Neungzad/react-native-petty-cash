'use strict';

import React, {
	Component,
	StyleSheet,
 	Text,
 	View,
 	Navigator
} from 'react-native';
import {Router, Route, Schema} from 'react-native-router-flux';
import Login from './components/Login';
import ExpenseList from './components/ExpenseList';
import ExpenseAdd from './components/ExpenseAdd';
import ExpenseView from './components/ExpenseView';
import {connect} from 'react-redux';

class RootRouter extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        
        if (!this.props.isLoggedIn) {
          return <Login />
        }

        return (
        	<View style={styles.container}>
		    		<Router hideNavBar={true}>
		    			<Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
              <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/> 
              <Route name="expenseMenu" initial={true}>                
								<Router>
									<Route name="expenseList" component={ExpenseList} title="Expense List" hideNavBar={true} /> 
									<Route name="expenseView" component={ExpenseView} title="Detail" hideNavBar={true} />
									<Route name="expenseAdd" component={ExpenseAdd} title="New Expense" schema="modal" hideNavBar={true}  />
								</Router>
              </Route>	                
            </Router>	 	
		   	 </View>
      	);
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
		top:0, 
		left:0, 
		right: 0, 
		bottom: 0
  }
});

const select = (store) => {
  return {
    isLoggedIn: store.user.isLoggedIn,
  }
}

export default connect(select)(RootRouter);