import React, { Component } from 'react';

import { NAV_STYLES } from '../config';
import { toTitleCase } from '../utils';

import Meal from '../components/Meal';
import NavButton from '../components/common/NavButton';

class MealScreen extends Component {
  static navigationOptions = {
    title: (props) => {
      return toTitleCase(props.state.params.mealType);
    },
    header: ({ state, setParams }) => {
      // supported modes: 'view-meal', 'edit-meal', 'add-meal'
      const mode = state.params.mode;
      // in 'view' mode we ensure that the back button is displayed and we show an edit button
      if (mode === 'view-meal') {
        return {
          right: <NavButton title="edit" onPress={() => setParams({ mode: 'edit-meal' })} />,
          ...NAV_STYLES,
        };
      }
      // in any other mode we hide both left and right buttons
      return {
        right: null,
        left: null,
        ...NAV_STYLES,
      };
    }
  };
  setMode = (mode) => {
    this.props.navigation.setParams({ mode });
  }
  doneEditing = () => {
    if (this.props.navigation.state.params.mode === 'add-meal') {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.setParams({ mode: 'view-meal' });
    }
  }
  goBack = () => {
    this.props.navigation.goBack();
  }
  goToAddFoodItem = (addFoodItem) => {
    this.props.navigation.navigate('AddFoodItem', { addFoodItem });
  }
  render() {
    const { dayIndex, mealType, week, mode } = this.props.navigation.state.params;
    const { doneEditing, goToAddFoodItem, goBack, setMode } = this;
    const isEditing = !!(mode === 'edit-meal');
    return (
      <Meal
        dayIndex={dayIndex}
        mealType={mealType}
        start={week}
        doneEditing={doneEditing}
        goToAddFoodItem={goToAddFoodItem}
        goBack={goBack}
        editing={isEditing}
        setMode={setMode}
      />
    );
  }
}

export default MealScreen;
