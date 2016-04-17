import React, {Component, StyleSheet, Text, View, TextInput, DatePickerAndroid, TouchableWithoutFeedback} from 'react-native';

export default class DatePicker extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
   	this.state = {
      presetDate: new Date(2016, 4, 8),
      simpleText: 'pick a date'
    }
  }

  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback        
        onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
        <Text style={styles.datePicker}>{this.state.simpleText}</Text>
      </TouchableWithoutFeedback>
    );
  }
}
 
const styles = StyleSheet.create({ 
  datePicker: {
    marginTop: 10,
    paddingTop: 10,
    marginLeft: 7,
    fontSize: 16
  }
})
