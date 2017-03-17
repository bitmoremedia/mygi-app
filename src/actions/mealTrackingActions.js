import {
  UPDATE_WEEK,
} from './types';

export const updateWeeklyMealData = (weeklyMealData) => {
  return {
    type: UPDATE_WEEK,
    payload: weeklyMealData,
  };
};
