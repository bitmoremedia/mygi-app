import styled from 'styled-components/native';

import * as colors from '../../config/colors';

const rootDisplayName = 'FoodGrid';

export const Container = styled.ScrollView`
  backgroundColor: ${colors.appBackground};
`;

export const Grid = styled.View`
  flexDirection: column;
  justifyContent: space-between;
`;

export const Row = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;

export const Col = styled.View`
  flexDirection: column;
`;

export const ItemContainer = styled.TouchableHighlight`
  flex: 1;
  overflow: hidden;
`;

export const Item = styled.View`
  borderRadius: 0;
  flex: 1;
  overflow: hidden;
`;

export const ItemImage = styled.Image`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  opacity: 0.8;
`;

export const ItemTitle = styled.Text`
  backgroundColor: ${colors.main};
  color: ${colors.textOnMain};
  fontSize: 14;
  fontWeight: 200;
  padding: 5;
  position: absolute;
  top: 80;
  left: 0;
  zIndex: 99;
`;

Container.displayName = `${rootDisplayName}_Container`;
Grid.displayName = `${rootDisplayName}_Grid`;
Row.displayName = `${rootDisplayName}_Row`;
Col.displayName = `${rootDisplayName}_Col`;
Item.displayName = `${rootDisplayName}_Item`;
ItemImage.displayName = `${rootDisplayName}_ItemImage`;
ItemTitle.displayName = `${rootDisplayName}_ItemTitle`;
