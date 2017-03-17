import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { CATEGORY_IMAGES } from '../../config';
import * as colors from '../../config/colors';

import FoodListItem from './FoodListItem';

class FoodCategoryList extends Component {

  renderItem(foodItem) {
    return <FoodListItem foodItem={foodItem} key={foodItem.id} />;
  }

  render() {
    const { category, foodList } = this.props;
    const imagePath = CATEGORY_IMAGES[category];

    const foodItems = foodList.map((item) => {
      return (
        this.renderItem(item)
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.foodImage}
            source={imagePath}
          />
        {foodItems}
        </ScrollView>
      </View>
    );
  }
}

FoodCategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  foodList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gi: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FoodCategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.appBackground,
  },
  foodImage: {
    flex: 1,
    height: 100,
    marginBottom: 5,
  }
});
