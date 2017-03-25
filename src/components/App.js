import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import MainNavigation from '../screens/MainNavigation';

export default class App extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <MainNavigation />
    );
  }
}
