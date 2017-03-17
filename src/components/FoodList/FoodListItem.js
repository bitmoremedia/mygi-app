import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as colors from '../../config/colors';
import GiValue from '../common/GiValue';
import FavButton from '../FavButton';

class FoodListItem extends Component {

  render() {
    const { name, gi, id } = this.props.foodItem;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.iconContainer}>
            <FavButton id={id} />
          </View>
          <GiValue gi={gi} />
        </View>
      </View>
    );
  }
}

FoodListItem.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gi: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default FoodListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  leftContainer: {
    flex: 4,
    flexDirection: 'column',
    padding: 10
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    paddingRight: 10,
    paddingTop: 4,
  },
  name: {
    color: colors.text,
  },
  category: {
    color: colors.subText,
  },
});
