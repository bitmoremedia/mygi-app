import styled from 'styled-components/native';

import * as colors from '../../../config/colors';

const rootDisplayName = 'GiLabel';

export const Label = styled.Text`
  color: white;
  paddingTop: 2;
  paddingBottom: 2;
`;

export const LabelWrapper = styled.View`
  justifyContent: center;
  alignItems: center;
  borderRadius: ${props => {
    if (props.large) {
      return '40';
    }
    return '30';
  }};
  height: ${props => {
    if (props.large) {
      return '80';
    }
    return '60';
  }};
  width: ${props => {
    if (props.large) {
      return '80';
    }
    return '60';
  }};
  backgroundColor: ${props => {
    switch (props.type) {
      case 'high':
        return colors.highGi;
      case 'medium':
        return colors.mediumGi;
      case 'low':
        return colors.lowGi;
      default:
        return colors.mediumGi;
    }
  }};
`;


Label.displayName = `${rootDisplayName}_Label`;
LabelWrapper.displayName = `${rootDisplayName}_LabelWrapper`;
