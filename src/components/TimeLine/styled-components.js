import styled from 'styled-components/native';

import * as colors from '../../config/colors';

const rootDisplayName = 'TimeLine';

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${colors.appBackground};
`;

export const Section = styled.View`
  backgroundColor: ${colors.secondaryTransparent};
  paddingTop: 5;
  paddingBottom: 5;
  paddingLeft: 15;
`;

export const SectionText = styled.Text`
  color: ${colors.textOnSecondary};
`;

export const Row = styled.TouchableOpacity`
  paddingTop: 5;
  paddingBottom: 5;
  paddingLeft: 15;
  paddingRight: 15;
  flexDirection: row;
  alignItems: center;
  height: 50;
`;

export const WeekDates = styled.View`
  flex: 2;
  flexDirection: column;
`;

export const WeekDate = styled.Text`
  color: ${colors.subText};
`;

export const GiValues = styled.View`
  flex: 4;
  flexDirection: row;
  justifyContent: center;
`;

export const GiValue = styled.View`
  alignItems: center;
  justifyContent: center;
  borderRadius: 20;
  backgroundColor: ${props => {
    switch (props.type) {
      case 'high':
        return colors.highGi;
      case 'medium':
        return colors.mediumGi;
      case 'low':
        return colors.lowGi;
      case 'none':
        return colors.noGiValue;
      default:
        return colors.noGiValue;
    }
  }};
  height: 40;
  width: 40;
  marginLeft: 5;
  marginRight: 5;
`;

export const GiValueText = styled.Text`
  color: ${props => {
    switch (props.type) {
      case 'high':
        return colors.textOnHighGi;
      case 'medium':
        return colors.textOnMediumGi;
      case 'low':
        return colors.textOnLowGi;
      case 'none':
        return colors.textOnNoGiValue;
      default:
        return colors.textOnNoGiValue;
    }
  }};
`;

export const SuccessWarnIconContainer = styled.View`
  flex: 1;
  alignItems: center;
`;

Container.displayName = `${rootDisplayName}_Container`;
SuccessWarnIconContainer.displayName = `${rootDisplayName}_SuccessWarnIconContainer`;
GiValues.displayName = `${rootDisplayName}_GiValues`;
GiValueText.displayName = `${rootDisplayName}_GiValueText`;
WeekDates.displayName = `${rootDisplayName}_WeekDates`;
WeekDate.displayName = `${rootDisplayName}_WeekDate`;
Row.displayName = `${rootDisplayName}_Row`;
SectionText.displayName = `${rootDisplayName}_SectionText`;
Section.displayName = `${rootDisplayName}_Section`;
