import React from 'react';
import { Platform, Slider } from 'react-native';

import * as colors from '../../config/colors';

const CustomSlider = (props) => {
  const defaultProps = {
    maximumTrackTintColor: (Platform.OS === 'ios') ? null : colors.main,
    minimumTrackTintColor: colors.main,
    thumbTintColor: colors.main,
  };
  const combinedProps = Object.assign(defaultProps, props);
  return <Slider {...combinedProps} />;
};

export default CustomSlider;
