import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';
import { NAV_ICON_SIZE } from '../../config';

class NavIcon extends Component {

  render() {
    const { type, mainColor } = this.props;
    const iconStyles = {
      color: (mainColor) ? colors.main : colors.textOnMain
    };

    let iconName;
    let iconSize = NAV_ICON_SIZE;
    switch (type) {
      case 'settings':
          iconName = 'ios-settings';
        break;
      case 'search':
          iconName = 'ios-search';
        break;
      case 'close-down':
          iconName = 'ios-arrow-dropdown-circle';
          iconSize = 35;
        break;
      default:
        iconName = 'ios-alert';
    }

    return (
      <View style={styles.navIconContainer}>
        <Ionicons
          name={iconName}
          size={iconSize}
          style={iconStyles}
        />
      </View>
    );
  }

}

NavIcon.propTypes = {
  type: PropTypes.string.isRequired,
  mainColor: PropTypes.bool,
};

export default NavIcon;

const platformStyleRules = {
  ios: {
    navIconContainer: {
      height: 50,
      width: 60,
    },
  },
  android: {
    navIconContainer: {
      height: 56,
      width: 60,
    },
  }
};

// capture style rules based on platform (defaulting to ios)
const styleRules = (Platform.OS && platformStyleRules[Platform.OS]) ?
  platformStyleRules[Platform.OS] : platformStyleRules.ios;

const styles = StyleSheet.create({
  navIconContainer: {
    height: styleRules.navIconContainer.height,
    width: styleRules.navIconContainer.width,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
