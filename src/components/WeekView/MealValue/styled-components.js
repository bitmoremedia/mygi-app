import styled from 'styled-components/native';

import * as colors from '../../../config/colors';

const rootDisplayName = 'MealValue';

export const Container = styled.View`
  borderRadius: 50;
  padding: 10;
  width: 50;
  height: 50;
  justifyContent: center;
  backgroundColor: ${props => {
    switch (props.giType) {
      case 'high':
        return colors.highGi;
      case 'medium':
        return colors.mediumGi;
      case 'low':
        return colors.lowGi;
      default:
        return colors.noGiValue;
    }
  }};
`;

export const Title = styled.Text`
  textAlign: center;
  color: ${props => {
    switch (props.giType) {
      case 'high':
        return colors.textOnHighGi;
      case 'medium':
        return colors.textOnMediumGi;
      case 'low':
        return colors.textOnLowGi;
      default:
        return colors.textOnNoGiValue;
    }
  }};
`;


export const GiValue = styled(Title)``;

GiValue.displayName = `${rootDisplayName}_GiValue`;

Container.displayName = `${rootDisplayName}_Container`;
Title.displayName = `${rootDisplayName}_Title`;
