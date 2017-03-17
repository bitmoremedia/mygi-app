import styled from 'styled-components/native';

import * as colors from '../../../config/colors';

const rootDisplayName = 'Button';

export const Container = styled.TouchableHighlight`
`;

export const InnerContainer = styled.View`
  backgroundColor: ${props => {
    return colors[props.mode];
  }}
`;

export const ButtonText = styled.Text`
  color: ${colors.textOnMain};
  fontSize: 16;
  padding: 15;
  textAlign: ${props => {
    if (props.center) {
      return 'center';
    }
    return 'auto';
  }};
`;

ButtonText.displayName = `${rootDisplayName}_ButtonText`;
InnerContainer.displayName = `${rootDisplayName}_InnerContainer`;
Container.displayName = `${rootDisplayName}_Container`;
