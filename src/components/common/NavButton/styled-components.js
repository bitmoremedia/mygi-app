import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../../config/colors';

const rootDisplayName = 'Nav_';

export const Button = styled.TouchableWithoutFeedback`
  flexDirection: row;
  justifyContent: center;
  alignItems: stretch;
`;

export const Text = styled.Text`
  flex: 1;
  color: ${colors.textOnMain};
  textAlign: center;
  paddingTop: ${() => {
    if (Platform.OS === 'android') {
      return 18;
    }
    return 14;
  }}
  width: 60;
`;

export const StyledIcon = styled(Icon)`
  flex: 1;
  color: ${colors.textOnMain};
  paddingTop: ${() => {
    if (Platform.OS === 'android') {
      return 16;
    }
    return 12;
  }}
  textAlign: center;
  width: 60;
`;

Button.displayName = `${rootDisplayName}_Button`;
Text.displayName = `${rootDisplayName}_Text`;
StyledIcon.displayName = `${rootDisplayName}_StyledIcon`;
