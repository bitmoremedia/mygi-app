import { StackNavigator } from 'react-navigation';
import TrackerScreen from '../TrackerScreen';
import WeekViewScreen from '../WeekViewScreen';
import MealScreen from '../MealScreen';
import AddFoodItemScreen from '../AddFoodItemScreen';

const TrackerTab = StackNavigator({
  Tracker: {
    screen: TrackerScreen,
  },
  WeekView: {
    screen: WeekViewScreen,
  },
  Meal: {
    screen: MealScreen,
  },
  AddFoodItem: {
    screen: AddFoodItemScreen,
  },
});

export default TrackerTab;
