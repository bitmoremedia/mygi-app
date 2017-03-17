import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';

import { NAV_TAB_HEIGHT } from '../../config';
import * as colors from '../../config/colors';
import TabIcon from '../../components/common/TabIcon';

import TrackerTab from './TrackerTab';
import TargetsTab from './TargetsTab';
import FoodListTab from './FoodListTab';
import FavouritesTab from './FavouritesTab';


const TabRoutes = {
  Tracker: {
    screen: TrackerTab,
    navigationOptions: {
      tabBar: () => ({
        label: 'Meal Tracker',
        icon: ({ focused }) => (<TabIcon type="tracker" isSelected={focused} />)
      }),
    },
  },
  Targets: {
    screen: TargetsTab,
    navigationOptions: {
      tabBar: () => ({
        label: 'GI Target',
        icon: ({ focused }) => (<TabIcon type="target" isSelected={focused} />)
      }),
    },
  },
  FoodList: {
    screen: FoodListTab,
    navigationOptions: {
      tabBar: () => ({
        label: 'Food List',
        icon: ({ focused }) => (<TabIcon type="food-list" isSelected={focused} />)
      }),
    },
  },
  Favourites: {
    screen: FavouritesTab,
    navigationOptions: {
      tabBar: () => ({
        label: 'Favourites',
        icon: ({ focused }) => (<TabIcon type="favourites" isSelected={focused} />)
      }),
    },
  },
};

/*
import DebugScreen from '../DebugScreen';

TabRoutes.Debug = {
  screen: DebugScreen,
  navigationOptions: {
    tabBar: () => ({
      label: 'DEBUG',
      icon: ({ focused }) => (<TabIcon type="debug" isSelected={focused} />)
    }),
  }
};
*/

const TabConfig = {
  initialRouteName: 'FoodList',
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  lazyLoad: true,
  order: ['FoodList', 'Favourites', 'Targets', 'Tracker'],
  tabBarOptions: {
    activeTintColor: colors.textOnMain,
    labelStyle: {
      color: colors.textOnMain,
    },
    style: {
      backgroundColor: colors.main,
      height: NAV_TAB_HEIGHT,
    }
  },
};

const TabScreenNavigator = TabNavigator(
  TabRoutes,
  TabConfig,
);

export default TabScreenNavigator;
