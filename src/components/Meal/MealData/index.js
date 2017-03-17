import React, { PropTypes } from 'react';

import Hr from '../../../components/common/Hr';

import GiValue from '../../common/GiValue';

import {
  Container,
  FoodRows,
  FoodRow,
  FoodName,
  NoFoodItems,
  AddFoodIconContainer,
  AddFoodIcon,
  DeleteFoodIconContainer,
  DeleteFoodIcon,
  ValueDeleteContainer,
} from './styled-components';

const renderItem = (item, editing, deleteAction) => {
  return (
    <FoodRow key={item.id}>
      <FoodName>{item.name}</FoodName>
      <ValueDeleteContainer>
        <GiValue gi={item.gi} />
        { editing &&
          <DeleteFoodIconContainer onPress={() => { deleteAction(item); }} >
            <DeleteFoodIcon name="ios-close-circle" size={30} />
          </DeleteFoodIconContainer>
        }
      </ValueDeleteContainer>
    </FoodRow>
  );
};

const MealData = ({ foodItems, addAction, deleteAction, editing }) => {
  return (
    <Container>
      <Hr text="Food Items" />
        { editing &&
          <AddFoodIconContainer onPress={addAction}>
            <AddFoodIcon name="ios-add-circle-outline" size={35} />
          </AddFoodIconContainer>
        }
        <FoodRows>
          {foodItems.map((item) => renderItem(item, editing, deleteAction))}
        </FoodRows>
        { !foodItems.length &&
          <NoFoodItems>
            No food items added for this meal
          </NoFoodItems>
        }
    </Container>
  );
};

MealData.propTypes = {
  foodItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gi: PropTypes.number.isRequired,
  })).isRequired,
  addAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default MealData;
