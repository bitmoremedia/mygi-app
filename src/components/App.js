import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import MainNavigation from '../screens/MainNavigation';

export default class App extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
      <MainNavigation />
    );
  }
}
