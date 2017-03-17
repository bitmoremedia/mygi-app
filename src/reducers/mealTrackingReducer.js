import moment from 'moment';

import {
  UPDATE_WEEK,
  REMOVE_WEEK,
} from '../actions/types';

const currentWeek = moment().day('Monday')
  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).format();
const initialState = {
  firstWeek: currentWeek,
  meals: {
    [currentWeek]: {
      giValues: [],
      foodByMeal: [],
    }
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_WEEK: {
      // TODO: assess if the firstWeek needs updating (eg to support retrospective entries)
      return {
        ...state,
        meals: {
          ...state.meals,
          [payload.start]: payload,
        },
      };
    }
    case REMOVE_WEEK: {
      const currentState = { ...state };
      delete currentState.meals[payload];
      return currentState;
    }
    default: return state;
  }
};

export const firstWeek = (mealsState) => {
  return mealsState.firstWeek;
};

export const meals = (mealsState) => {
  return mealsState.meals;
};

export const mealsForWeek = (mealsState, weekStart) => {
  return mealsState.meals[weekStart];
};

export default reducer;
