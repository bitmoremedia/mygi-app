import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import Slider from '../../components/common/Slider';
import Button from '../../components/common/Button';
import GiLabel from '../../components/common/GiLabel';

import MealData from './MealData';

import {
  Container,
  Day,
  GiLabelContainer,
  SliderContainer,
  FineAdjustmentIconContainer,
  FineAdjustmentIcon,
  MealDataContainer,
  ActionButtons,
} from './styled-components';

const buttonStyles = {
  flex: 1,
  marginLeft: 6,
  marginRight: 6,
};

class Meal extends Component {

  constructor(props) {
    super(props);
    const { mealsForWeek, dayIndex, mealType } = props;
    let initialValue = 0;
    let initialFoodItems = [];
    let hasExistingValue = false;
    // set initial gi value for meal
    if (mealsForWeek &&
      mealsForWeek.giValues &&
      mealsForWeek.giValues[dayIndex] &&
      Object.prototype.hasOwnProperty.call(mealsForWeek.giValues[dayIndex], mealType)) {
      initialValue = mealsForWeek.giValues[dayIndex][mealType];
      hasExistingValue = true;
    }
    // set initial food items for meal
    if (mealsForWeek &&
      mealsForWeek.foodByMeal &&
      mealsForWeek.foodByMeal[dayIndex] &&
      Object.prototype.hasOwnProperty.call(mealsForWeek.foodByMeal[dayIndex], mealType)) {
      initialFoodItems = mealsForWeek.foodByMeal[dayIndex][mealType];
    }

    this.state = {
      newValue: initialValue,
      newFoodItems: initialFoodItems,
      hasExistingValue
    };
  }

  componentWillMount() {
    if (!this.state.hasExistingValue) {
      this.props.setMode('add-meal');
    } else {
      this.props.setMode('view-meal');
    }
  }

  onValueChange = (newValue) => {
    this.setState({
      newValue
    });
  }

  confirmChanges = () => {
    const { mealsForWeek, dayIndex, mealType, start } = this.props;
    const { newValue, newFoodItems } = this.state;
    const newMealsForWeek = Object.assign({
        start,
        giValues: [],
        foodByMeal: [],
      },
      mealsForWeek);
    // apply new GI value
    newMealsForWeek.giValues[dayIndex] = newMealsForWeek.giValues[dayIndex] || {};
    newMealsForWeek.giValues[dayIndex][mealType] = newValue;
    // apply new food items
    newMealsForWeek.foodByMeal[dayIndex] = newMealsForWeek.foodByMeal[dayIndex] || {};
    newMealsForWeek.foodByMeal[dayIndex][mealType] = newFoodItems;
    this.props.updateWeeklyMealData(newMealsForWeek);
    this.props.doneEditing();
  }

  deleteItem = () => {
    const { mealsForWeek, dayIndex, mealType, start, updateWeeklyMealData, goBack } = this.props;
    const newMealsForWeek = Object.assign({
        start,
        giValues: [],
        foodByMeal: [],
      },
      mealsForWeek);
    // delete giValue
    if (newMealsForWeek.giValues[dayIndex] && newMealsForWeek.giValues[dayIndex][mealType]) {
      delete newMealsForWeek.giValues[dayIndex][mealType];
    }
    // delete food items
    if (newMealsForWeek.foodByMeal[dayIndex] && newMealsForWeek.foodByMeal[dayIndex][mealType]) {
      delete newMealsForWeek.foodByMeal[dayIndex][mealType];
    }
    updateWeeklyMealData(newMealsForWeek);
    goBack();
  }

  deleteFoodItem = (item) => {
    const newState = Object.assign({}, this.state);
    let indexToDelete = null;
    newState.newFoodItems.forEach((existingItem, index) => {
      if (existingItem.id === item.id) {
        indexToDelete = index;
      }
    });
    if (indexToDelete !== null) {
      newState.newFoodItems.splice(indexToDelete, 1);
      this.setState(newState);
    }
  }

  addFoodItem = (item) => {
    const newState = Object.assign({}, this.state);
    // only add a food if it has not already been added to this meal
    let newItem = true;
    newState.newFoodItems.forEach((existingItem) => {
      if (existingItem.id === item.id) {
        newItem = false;
      }
    });
    if (newItem) {
      newState.newFoodItems.push(item);
      this.setState(newState);
    }
  }

  goToAddFoodItem = () => {
    this.props.goToAddFoodItem(this.addFoodItem);
  }

  fineAdjustment = (type) => {
    if (type === 'increment') {
      this.setState({
        newValue: this.state.newValue + 1,
      });
    } else {
      this.setState({
        newValue: this.state.newValue - 1,
      });
    }
  }

  render() {
    const { dayIndex, start, doneEditing, editing } = this.props;
    const {
      confirmChanges,
      onValueChange,
      deleteItem,
      goToAddFoodItem,
      deleteFoodItem,
      fineAdjustment,
     } = this;
    const { newValue, hasExistingValue, newFoodItems } = this.state;
    const dayDisplay = moment(start).add(dayIndex, 'days').format('dddd Do MMMM YYYY');
    const editMode = (editing || !hasExistingValue);

    return (
      <Container>
        <Day>{dayDisplay}</Day>
        <GiLabelContainer>
          { editMode &&
            <FineAdjustmentIconContainer onPress={() => { fineAdjustment('decrement'); }}>
              <FineAdjustmentIcon name="ios-remove-circle-outline" size={50} />
            </FineAdjustmentIconContainer>
          }
          <GiLabel giValueDisplay={this.state.newValue} large />
          { editMode &&
            <FineAdjustmentIconContainer onPress={() => { fineAdjustment('increment'); }}>
              <FineAdjustmentIcon name="ios-add-circle-outline" size={50} />
            </FineAdjustmentIconContainer>
          }
        </GiLabelContainer>
        { editMode &&
          <SliderContainer>
            <Slider
              value={newValue}
              minimumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={onValueChange}
            />
          </SliderContainer>
        }
        <MealDataContainer>
          <MealData
            foodItems={newFoodItems}
            addAction={goToAddFoodItem}
            editing={editMode}
            deleteAction={deleteFoodItem}
          />
        </MealDataContainer>
        { editMode &&
          <ActionButtons>
            <Button onPress={confirmChanges} mode="positive" style={buttonStyles}>
              Save
            </Button>
            <Button onPress={doneEditing} mode="neutral" style={buttonStyles}>
              Cancel
            </Button>
            { hasExistingValue &&
              <Button onPress={deleteItem} mode="negative" style={buttonStyles}>
                Delete
              </Button>
            }
          </ActionButtons>
        }
      </Container>
    );
  }
}

Meal.propTypes = {
  dayIndex: PropTypes.number.isRequired,
  mealType: PropTypes.oneOf(['breakfast', 'lunch', 'dinner']).isRequired,
  start: PropTypes.string.isRequired,
  mealsForWeek: PropTypes.any,
  doneEditing: PropTypes.func.isRequired,
  goToAddFoodItem: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
};

export default Meal;
