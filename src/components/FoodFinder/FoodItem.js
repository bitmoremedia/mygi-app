import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import * as colors from '../../config/colors';
import GiValue from '../common/GiValue';
import FavButton from '../FavButton';

class FoodItem extends Component {

  render() {
    const { name, category, gi, id } = this.props.foodItem;
    const { onSelect } = this.props;
    const item = (
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.iconContainer}>
            <FavButton id={id} />
          </View>
          <GiValue gi={gi} />
        </View>
      </View>
    );
    if (onSelect) {
      return (
        <TouchableOpacity style={styles.mainContainer} onPress={onSelect}>
          {item}
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.mainContainer}>
        {item}
      </View>
    );
  }
}

FoodItem.propTypes = {
  foodItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    gi: PropTypes.number.isRequired
  }),
  onSelect: PropTypes.func,
};

export default FoodItem;

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
    paddingTop: 12,
  },
  name: {
    color: colors.text,
  },
  category: {
    color: colors.subText,
  },
});
