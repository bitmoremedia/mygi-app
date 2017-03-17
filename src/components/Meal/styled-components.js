import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';
import { hexToRgba } from '../../utils';

const rootDisplayName = 'Meal_';

export const Container = styled.View`
  backgroundColor: ${colors.appBackground};
  flex: 1;
`;

export const Day = styled.Text`
  color: ${colors.subText};
  padding: 10;
  textAlign: center;
  fontSize: 20;
  paddingTop: 20;
`;

export const GiLabelContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  padding: 10;
`;

export const FineAdjustmentIconContainer = styled.TouchableOpacity`
  paddingLeft: 20;
  paddingRight: 20;
`;

export const FineAdjustmentIcon = styled(Icon)`
  color: ${hexToRgba(colors.subText, 0.6)};
`;

export const SliderContainer = styled.View`
  paddingTop: 10;
  paddingRight: 30;
  paddingBottom: 10;
  paddingLeft: 30;
`;

export const MealDataContainer = styled.View`
  paddingTop: 10;
  paddingRight: 30;
  paddingBottom: 60;
  paddingLeft: 30;
  flex:1;
`;

export const ActionButtons = styled.View`
  position: absolute;
  bottom: 0;
  flexDirection: row;
  justifyContent: space-between;
  paddingBottom: 15;
  paddingLeft: 15;
  paddingRight: 15;
`;

FineAdjustmentIcon.displayName = `${rootDisplayName}_FineAdjustmentIcon`;
GiLabelContainer.displayName = `${rootDisplayName}_GiLabelContainer`;
ActionButtons.displayName = `${rootDisplayName}_ActionButtons`;
SliderContainer.displayName = `${rootDisplayName}_SliderContainer`;
MealDataContainer.displayName = `${rootDisplayName}_MealDataContainer`;
Day.displayName = `${rootDisplayName}_Day`;
Container.displayName = `${rootDisplayName}_Container`;
