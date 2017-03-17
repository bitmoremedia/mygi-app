import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

import * as colors from '../../config/colors';

const NoNavBarSpacer = ({ children }) => {
  if (Platform.OS === 'ios') {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
          {children}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      { children }
    </View>
  );
};

export default NoNavBarSpacer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 22,
    backgroundColor: colors.main,
  }
});
