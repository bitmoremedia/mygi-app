import React, { Component } from 'react';
import _ from 'lodash';

import { NAV_STYLES } from '../config';
import NavButton from '../components/common/NavButton';
import CategoryList from '../components/CategoryList';

class CategoryListScreen extends Component {
  static navigationOptions = {
    title: 'Food List',
    header: (props) => {
      const { navigate } = props;
      const left = (<NavButton
        icon="search"
        onPress={() => {
          navigate('Search');
        }}
      />);
        return {
          left,
          ...NAV_STYLES,
        };
    }
  }
  constructor(props) {
    super(props);
    // throttle the go to food list function to ensure that quick fire clicks do not render
    // the same screen stack multiple times
    this.throttledGoToFoodList = _.throttle(this.goToFoodList, 1000, { trailing: false });
  }
  goToFoodList = (category) => {
    this.props.navigation.navigate('FoodList', { category });
  }
  render() {
    return <CategoryList goToFoodList={this.throttledGoToFoodList} />;
  }
}

export default CategoryListScreen;
