import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';

const rootDisplayName = 'FavButton_';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const StyledIcon = styled(Icon)`
  flex: 1;
  color: ${colors.favButton};
`;

StyledIcon.displayName = `${rootDisplayName}_StyledIcon`;
Button.displayName = `${rootDisplayName}_Button`;
Container.displayName = `${rootDisplayName}_Container`;
