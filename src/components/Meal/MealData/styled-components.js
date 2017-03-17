import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../../config/colors';
import { hexToRgba } from '../../../utils';

const rootDisplayName = 'MealData_';

export const Container = styled.ScrollView`
  backgroundColor: ${colors.appBackground};
  flex: 1;
  paddingTop: 10;
  paddingBottom: 10;
`;

export const FoodRows = styled.View`
  paddingTop: 6;
`;

export const FoodRow = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  paddingTop: 2;
  paddingBottom: 2;
`;

export const FoodName = styled.Text`
`;

export const NoFoodItems = styled.Text`
  color: ${colors.subText};
  textAlign: center;
  paddingTop: 10;
`;

export const AddFoodIconContainer = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  paddingTop: 8;
  height: 45;
`;

export const AddFoodIcon = styled(Icon)`
  flex: 1;
  color: ${hexToRgba(colors.subText, 0.6)};
  textAlign: center;
`;

export const DeleteFoodIconContainer = styled.TouchableOpacity`
`;

export const DeleteFoodIcon = styled(Icon)`
  flex: 1;
  color: ${colors.negative};
  textAlign: center;
  paddingLeft: 10;
`;

export const ValueDeleteContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

ValueDeleteContainer.displayName = `${rootDisplayName}_ValueDeleteContainer`;
DeleteFoodIconContainer.displayName = `${rootDisplayName}_DeleteFoodIconContainer`;
DeleteFoodIcon.displayName = `${rootDisplayName}_DeleteFoodIcon`;
NoFoodItems.displayName = `${rootDisplayName}_NoFoodItems`;
AddFoodIcon.displayName = `${rootDisplayName}_AddFoodIcon`;
AddFoodIconContainer.displayName = `${rootDisplayName}_AddFoodIconContainer`;
FoodRows.displayName = `${rootDisplayName}_FoodRows`;
FoodName.displayName = `${rootDisplayName}_FoodName`;
FoodRow.displayName = `${rootDisplayName}_FoodRow`;
Container.displayName = `${rootDisplayName}_Container`;
