import React from 'react';
import { Text, StyleSheet } from 'react-native';

import * as colors from '../../config/colors';

const TextDisplay = ({ children, center, main }) => {
  const centerStyle = (center) ? { textAlign: 'center' } : {};
  const mainStyle = (main) ? { color: colors.text } : {};
  return (
    <Text style={[styles.text, centerStyle, mainStyle]} >
      {children}
    </Text>
  );
};

export default TextDisplay;

const styles = StyleSheet.create({
  text: {
    color: colors.subText,
    margin: 5,
  },
});
