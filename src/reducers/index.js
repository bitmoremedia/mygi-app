import { combineReducers } from 'redux';

import displaySettingsReducer from './displaySettingsReducer';
import foodListReducer, * as fromFoodListReducer from './foodListReducer';
import favouritesReducer, * as fromFavouritesReducer from './favouritesReducer';
import giTargetReducer, * as fromGiTargetReducer from './giTargetReducer';
import mealTrackingReducer, * as fromMealTrackingReducer from './mealTrackingReducer';

export default combineReducers({
  displaySettings: displaySettingsReducer,
  foodList: foodListReducer,
  favourites: favouritesReducer,
  giTarget: giTargetReducer,
  mealTracking: mealTrackingReducer,
});

export const isFavourite = (state, id) => fromFavouritesReducer.isFavourite(state.favourites, id);
export const favouriteItems = (state) =>
  fromFavouritesReducer.favouriteItems(state.foodList.allItems, state.favourites);

export const categoryList = (state) => fromFoodListReducer.categoryList(state.foodList.allItems);
export const foodListByCategory = (state, category) =>
  fromFoodListReducer.foodListByCategory(state.foodList.itemsToDisplay, category);

export const targets = (state) =>
  fromGiTargetReducer.targets(state.giTarget.targets);

export const firstWeek = (state) =>
  fromMealTrackingReducer.firstWeek(state.mealTracking);
export const meals = (state) =>
  fromMealTrackingReducer.meals(state.mealTracking);
export const mealsForWeek = (state, weekStart) =>
  fromMealTrackingReducer.mealsForWeek(state.mealTracking, weekStart);
