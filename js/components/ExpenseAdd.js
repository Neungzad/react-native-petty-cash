import React, {Component, StyleSheet, Text, View, TextInput, Picker, DatePickerAndroid, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Navbar from '../common/Navbar';
import DatePicker from '../common/DatePicker';
var Icon = require('react-native-vector-icons/FontAwesome');

class ExpenseAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        language: ''
      }
    }

    render() {
      const CATEGORIES = [
        {label: "ค่าเดินทาง", value: "transport"},
        {label: "สวัสดิการ (ทำฟัน)", value: "welfare_tooth"},
        {label: "สวัสดิการ (แว่นตา)", value: "welfare_glasses"},
        {label: "สวัสดิการ (เลนแว่นตา)", value: "welfare_lenses"},
        {label: "สวัสดิการ (ตรวจสุขภาพ)", value: "welfare_opd"},
        {label: "เงินจ่ายล่วงหน้า (เล็กๆน้อยๆ)", value: "advance"},
        {label: "ลงทุนในสินทรัพย์องค์กร", value: "asset"},
        {label: "เงินค้ำประกัน", value: "guarantee"},
      ];

      return (
      	<View style={styles.container}> 
      		<Navbar
            title="Add expense"
            lTitle="Back"
            />

          <View style={styles.form}>

            <View style={styles.row}>
              <View style={styles.labelContainer}>
                  <Icon style={styles.icon} name="money" size={23} color="#666" />
                  <Text style={styles.label}>Amount</Text>     
              </View>
              <View style={styles.inputContainer}>
               <TextInput
                  keyboardType={'numeric'}
                  style={styles.textInput} 
                  placeholder={'Amount'}
                  placeholderTextColor={'#DDD'} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Icon style={styles.icon} name="tags" size={23} color="#666" />
                <Text style={styles.label}>Category</Text>               
              </View>
              <View style={styles.inputContainer}>
                  <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    { CATEGORIES.map((category)=>(
                      <Picker.Item key={category} label={category.label} value={category.value} />
                    ))}
                  </Picker>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Icon style={styles.icon} name="calendar" size={23} color="#666" />
                <Text style={styles.label}>Date</Text>               
              </View>
              <View style={styles.inputContainer}>               
                <DatePicker />
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Icon style={styles.icon} name="commenting-o" size={23} color="#666" />
                <Text style={styles.label}>Description</Text>               
              </View>
              <View style={{alignItems:'flex-start'}}>
               <TextInput
                  multiline={true}
                  style={styles.textareaInput} 
                  placeholder={'Description'}
                  placeholderTextColor={'#DDD'} />
              </View>
            </View>
          </View>

          <View style={styles.submit}>
            <Text style={styles.fontWhite} > Submit </Text>
          </View>
      	</View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF' 
  },
  form: {
    padding: 5,
  },
  row: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column', 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  labelContainer: {
    flex: 0.3,
    flexDirection: 'row', 
    alignItems: 'center'
  },
  inputContainer: {
    flex: 0.7,
  },
  textareaInput: {
    height: 150,
    textAlignVertical: 'top'
  },
  icon: {
    marginRight: 10,
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#900',
    padding: 15,
    marginTop: 20,
  },
  fontWhite: {
    fontSize: 18,
    color: '#fff'
  }
});

export default ExpenseAdd;
