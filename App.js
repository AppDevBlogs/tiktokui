import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import Tabs from './App/config/router';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Tabs />
      </View>
    );
  }
}

export default App;
