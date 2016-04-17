import React, {Component, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
var Icon = require('react-native-vector-icons/FontAwesome');

class ExpenseRecord extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   return (
      <View> 
        {this.props.data.map((data, index) => 
          <TouchableHighlight underlayColor="#CCC" key={'hl_'+index} onPress={Actions.expenseView}>
            <View key={'row_'+index} style={styles.row}>
              <View style={{flex: 0.5}}><Text key={'cateName_'+index} style={styles.cateName}>{data.cateName}</Text></View>
              <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text key={'price_'+index} style={styles.price}>฿ {data.price.toFixed(2)}</Text>
                <Icon style={styles.iconArrow} name="chevron-right" size={20} color="#900" />
              </View>          
            </View>    
          </TouchableHighlight>
        )} 
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  cateName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  price: {
    fontSize: 18,
    textAlign: "right",
    marginRight: 10,
  },
  iconArrow: {
    marginTop: 3
  }
});

export default ExpenseRecord;
