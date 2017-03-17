import styled from 'styled-components/native';

import * as colors from '../../config/colors';

import MealValueComponent from './MealValue';

const rootDisplayName = 'WeekView';

export const Container = styled.ScrollView`
  backgroundColor: ${colors.appBackground};
`;

export const DayRow = styled.View`
  paddingTop: 10;
  paddingRight: 5;
  flex: 1;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

export const Day = styled.View`
  flex: 1;
`;

export const DayDisplay = styled.Text`
  color: ${colors.subText};
  textAlign: center;
`;

export const DateDisplay = styled.Text`
  color: ${colors.subText};
  fontSize: 10;
  textAlign: center;
`;

export const Meals = styled.View`
  flex: 4;
  flexDirection: row;
  justifyContent: space-around;
`;

export const MealValue = styled(MealValueComponent)`
`;

export const MealHeading = styled.Text`
  color: ${colors.subText};
  width: 85;
  textAlign: center;
  paddingTop: 8;
  paddingBottom: 8;
`;

MealHeading.displayName = `${rootDisplayName}_MealHeading`;
Meals.displayName = `${rootDisplayName}_Meals`;
DateDisplay.displayName = `${rootDisplayName}_DateDisplay`;
DayDisplay.displayName = `${rootDisplayName}_DayDisplay`;
Day.displayName = `${rootDisplayName}_Day`;
MealValue.displayName = `${rootDisplayName}_MealValue`;
Container.displayName = `${rootDisplayName}_Container`;
DayRow.displayName = `${rootDisplayName}_DayRow`;
