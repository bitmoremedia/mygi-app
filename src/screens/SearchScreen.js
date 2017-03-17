import React, { Component } from 'react';

import { NAV_STYLES } from '../config';
import FoodFinder from '../components/FoodFinder';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    header: {
      ...NAV_STYLES
    },
  }
  render() {
    return <FoodFinder autoFocus />;
  }
}

export default SearchScreen;
