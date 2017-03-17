import { StackNavigator } from 'react-navigation';

import CategoryListScreen from '../CategoryListScreen';
import FoodListScreen from '../FoodListScreen';
import SearchScreen from '../SearchScreen';

const stackNavigatorConfig = {
  headerMode: 'screen'
};

const FoodListTab = StackNavigator({
  CategoryList: {
    screen: CategoryListScreen,
  },
  FoodList: {
    screen: FoodListScreen,
  },
  Search: {
    screen: SearchScreen,
  }
}, stackNavigatorConfig);

export default FoodListTab;
