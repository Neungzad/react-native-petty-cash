import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Navbar from '../common/Navbar';
var Icon = require('react-native-vector-icons/FontAwesome');

class ExpenseView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<View style={styles.container}> 
            <Navbar
              title="Expense details"
              lTitle="Back"
              rTitle="Edit"
              />

            <View style={styles.content}>
              <View style={styles.boxPrice}>
                <Text style={styles.price}> ฿ 900.00 </Text>
              </View>

              <View style={styles.contentDetail}>
                <View style={styles.contentRow}> 
                    <View><Icon style={styles.icon} name="tags" size={23} color="#666" /></View>
                    <View><Text style={styles.text} >Transportation</Text></View>
                </View>
                <View style={styles.contentRow}> 
                    <View><Icon style={styles.icon} name="calendar" size={23} color="#666" /></View>
                    <View><Text style={styles.text} >Mar 20, 2016</Text></View>
                </View>
                <View style={styles.contentRow}> 
                    <View><Icon style={styles.icon} name="commenting-o" size={23} color="#666" /></View>
                    <View><Text style={styles.text} >ค่าเดินทางไปประชุม เรื่อง SSO ที่กองทัพบก </Text></View>
                </View>
              </View>

              <View style={styles.boxDelete}>
                <Icon.Button name="trash-o" size={23} backgroundColor="#900" onPress={()=>alert('Call delete function')}>
                  <Text style={{fontSize: 21, color: '#fff'}}>Delete</Text>
                </Icon.Button>
              </View>
            </View>
        	</View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEDEE',
  },
  content: {
    flexDirection: 'column',
  },
  boxPrice: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
  }, 
  price: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  contentDetail: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20, 
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    fontSize: 19,
  },
  underline: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  boxDelete: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50
  }
});

export default ExpenseView;
