import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as colors from '../../config/colors';
import { giType } from '../../config';

class GiValue extends Component {
  render() {
    const { gi } = this.props;
    const type = giType(gi);
    return (
      <View style={combinedStyles.container[type]}>
        <Text style={combinedStyles.text[type]}>{gi}</Text>
      </View>
    );
  }
}

GiValue.propTypes = {
  gi: PropTypes.number.isRequired
};

export default GiValue;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    width: 40,
  },
  text: {}
});

const combinedStyles = {
  container: {
    high: StyleSheet.flatten([styles.container, { backgroundColor: colors.highGi }]),
    low: StyleSheet.flatten([styles.container, { backgroundColor: colors.lowGi }]),
    medium: StyleSheet.flatten([styles.container, { backgroundColor: colors.mediumGi }]),
  },
  text: {
    high: StyleSheet.flatten([styles.text, { color: colors.textOnHighGi }]),
    low: StyleSheet.flatten([styles.text, { color: colors.textOnLowGi }]),
    medium: StyleSheet.flatten([styles.text, { color: colors.textOnMediumGi }]),
  }
};
