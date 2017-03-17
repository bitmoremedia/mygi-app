import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';

const SuccessWarnIcon = ({ type }) => {
  const iconColor = (type === 'success') ? colors.award : colors.negative;
  const iconName = (type === 'success') ? 'ios-star' : 'md-warning';
  return (
    <View style={styles.container}>
      <Ionicons
        name={iconName}
        color={iconColor}
        size={30}
      />
    </View>
  );
};

SuccessWarnIcon.propTypes = {
  type: PropTypes.oneOf(['success', 'warning']).isRequired,
};

export default SuccessWarnIcon;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
