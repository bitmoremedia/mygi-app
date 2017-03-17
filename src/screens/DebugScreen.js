import React, { Component } from 'react';
import { View } from 'react-native';

import Debug from '../components/Debug';

export default class MyGiScreen extends Component {
  static navigationOptions = {
    title: 'DEBUG',
  };
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Debug />
      </View>
    );
  }
}
