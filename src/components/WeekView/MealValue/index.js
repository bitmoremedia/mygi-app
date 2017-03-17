import React, { PropTypes } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { giType } from '../../../config';

import {
  Container,
  GiValue,
} from './styled-components';

const MealValue = ({ value }) => {
  let giValueDisplay;
  let mealGiType;
  if (value === undefined) {
    mealGiType = 'noGiValue';
    giValueDisplay = (
      <GiValue>
        <Ionicons
          name="md-add"
          size={24}
        />
      </GiValue>
    );
  } else {
    mealGiType = giType(value);
    giValueDisplay = <GiValue>{value}</GiValue>;
  }

  return (
    <Container giType={mealGiType} >
      {giValueDisplay}
    </Container>
  );
};

MealValue.propTypes = {
  value: PropTypes.number,
};

export default MealValue;
