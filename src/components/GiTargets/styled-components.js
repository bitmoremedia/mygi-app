import styled from 'styled-components/native';

import * as colors from '../../config/colors';

const rootDisplayName = 'GiTargets';

export const Container = styled.ScrollView`
  backgroundColor: ${colors.appBackground};
`;

export const Grid = styled.View`
  flexDirection: column;
  justifyContent: space-between;
  paddingLeft: 20;
  paddingRight: 20;
`;

export const Row = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  paddingTop: 10;
  paddingBottom: 10;
`;

export const Col = styled.View`
  flex: 1;
  flexDirection: column;
`;

export const GiCol = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: center;
`;

export const SliderCol = styled.View`
  flex: 3;
  flexDirection: column;
  paddingLeft: 15;
  paddingRight: 5;
  justifyContent: center;
`;

export const TextSection = styled.Text`
  color: ${colors.subText};
  textAlign: center;
`;

export const Intro = styled(TextSection)`
  marginTop: 10;
  marginBottom: 10;
  fontSize: 16;
  color: ${colors.text};
`;

export const SubIntro = styled(TextSection)`
  marginTop: 10;
  marginBottom: 10;
`;

export const SuccessWarnIconContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
`;

SuccessWarnIconContainer.displayName = `${rootDisplayName}_SuccessWarnIconContainer`;
Container.displayName = `${rootDisplayName}_Container`;
Grid.displayName = `${rootDisplayName}_Grid`;
Row.displayName = `${rootDisplayName}_Row`;
Col.displayName = `${rootDisplayName}_Col`;
GiCol.displayName = `${rootDisplayName}_GiCol`;
SliderCol.displayName = `${rootDisplayName}_SliderCol`;
Intro.displayName = `${rootDisplayName}_Intro`;
