import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import { NAV_STYLES } from '../config';
import NavButton from '../components/common/NavButton';
import FoodList from '../components/FoodList';

import DisplaySettingsScreen from './DisplaySettingsScreen';

class FoodListScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.category,
    header: ({ navigate }) => {
      const right = (
        <NavButton
          icon="settings"
          onPress={() => {
            navigate('Settings');
          }}
        />
      );
      return {
        right,
        ...NAV_STYLES,
      };
    },
  };

  render() {
    const { params } = this.props.navigation.state;
    return <FoodList category={params.category} />;
  }
}

const FoodListStack = StackNavigator({
  Home: {
    screen: FoodListScreen,
  },
  Settings: {
    screen: DisplaySettingsScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default FoodListStack;
