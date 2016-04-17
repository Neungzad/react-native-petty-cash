import React, {Component, StyleSheet, Text, View, ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Navbar from '../common/Navbar';
import ExpenseRecord from './ExpenseRecord';

class ExpenseList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        }),
        loaded: false,
      }
    }

    componentDidMount() {
      let data = {
        "data":[{
            "date": 'Today',
            "sum": 900.00,
            "detail": [{
              "cateName": "Transport",
              "price": 350.00, 
            },{
              "cateName": "Other",
              "price": 550.00, 
            }]
          },{
            "date": 'Mar 20, 2016',
            "sum": 130.00,
            "detail": [{
              "cateName": "Transport",
              "price": 50.00, 
            },{
              "cateName": "Other",
              "price": 80.00, 
            }]
          },{
            "date": 'Mar 18, 2016',
            "sum": 68.00,
            "detail": [{
              "cateName": "Transport",
              "price": 50.00, 
            },{
              "cateName": "Other",
              "price": 80.00, 
            }]
          },{
            "date": 'Mar 10, 2016',
            "sum": 1900.00,
            "detail": [{
              "cateName": "Transport",
              "price": 50.00, 
            },{
              "cateName": "Other",
              "price": 80.00, 
            }]
          },{
            "date": 'Mar 5, 2016',
            "sum": 458.00,
            "detail": [{
              "cateName": "Transport",
              "price": 50.00, 
            },{
              "cateName": "Other",
              "price": 80.00, 
            }]
          }
        ]
      };

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.data),
        loaded: true,
      });
    }

    render() {
      return (
      	<View style={styles.container}> 
          <Navbar
            title="Expense" />  

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderExpenses}
            style={styles.listView}
          />

          <ActionButton 
            buttonColor="#900"
            onPress={Actions.expenseAdd}
            position="left"
          />
      	</View>
      );
    }

    _renderExpenses(expenses) {
      return (
        <View style={styles.listBox}>
          <View style={styles.row}>
            <View style={{flex: 0.5}}><Text style={styles.date}>{expenses.date}</Text></View>
            <View style={{flex: 0.5}}><Text style={styles.sum}>฿ {expenses.sum.toFixed(2)}</Text></View>          
          </View>
          <ExpenseRecord data={expenses.detail} />          
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
  	fontSize: 18,
  	fontWeight: 'bold'
  },
  listView: {
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },
  listBox: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5EE',
    padding: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  }
});

export default ExpenseList;
