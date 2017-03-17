import React, { Component } from 'react';

import { NAV_STYLES } from '../config';
import FoodFinder from '../components/FoodFinder';

class AddFoodItemScreen extends Component {
  static navigationOptions = {
    title: 'Add Food Item',
    header: {
      ...NAV_STYLES
    },
  }

  onSelect = (item) => {
    this.props.navigation.state.params.addFoodItem(item);
    this.props.navigation.goBack();
  }

  render() {
    return <FoodFinder autoFocus onSelect={this.onSelect} />;
  }
}

export default AddFoodItemScreen;
