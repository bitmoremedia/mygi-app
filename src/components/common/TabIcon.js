import React, { Component, PropTypes } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from '../../config/colors';
import { NAV_ICON_SIZE } from '../../config';

function getColor(isSelected) {
  return isSelected ? colors.textOnMain : colors.textOnMain;
}

class TabIcon extends Component {

  render() {
    const { type, isSelected } = this.props;
    let iconName;

    switch (type) {
      case 'tracker':
          iconName = (isSelected) ? 'ios-pulse' : 'ios-pulse-outline';
        break;
      case 'target':
          iconName = (isSelected) ? 'ios-locate' : 'ios-locate-outline';
        break;
      case 'food-list':
          iconName = (isSelected) ? 'ios-nutrition' : 'ios-nutrition-outline';
        break;
      case 'favourites':
          iconName = (isSelected) ? 'ios-heart' : 'ios-heart-outline';
        break;
      case 'debug':
          iconName = (isSelected) ? 'ios-bug' : 'ios-bug-outline';
        break;
      default:
        iconName = 'ios-alert';
    }

    return (
      <Ionicons
        name={iconName}
        size={NAV_ICON_SIZE}
        color={getColor(isSelected)}
      />
    );
  }

}

TabIcon.propTypes = {
  type: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default TabIcon;
