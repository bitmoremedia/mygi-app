import { StackNavigator } from 'react-navigation';
import FavouritesScreen from '../FavouritesScreen';

const FoodListTab = StackNavigator({
  Favourites: {
    screen: FavouritesScreen,
  },
});

export default FoodListTab;
