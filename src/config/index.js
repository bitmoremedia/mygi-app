import * as colors from './colors';

export const LOW_GI_BOUNDARY = 55;
export const MEDIUM_GI_BOUNDARY = 70;
export const NAV_ICON_SIZE = 24;
export const NAV_TAB_HEIGHT = 40;
export const NAV_STYLES = {
  titleStyle: {
    color: colors.textOnMain,
  },
  style: {
    backgroundColor: colors.main,
  },
  tintColor: colors.textOnMain,
};

export const CATEGORY_IMAGES = {
  Cereals: require('./img/breakfast.jpg'),
  Fruits: require('./img/fruits.jpg'),
  Vegetables: require('./img/vegetables.jpg'),
  Breads: require('./img/breads.jpg'),
  Staples: require('./img/staples.jpg'),
  Beans: require('./img/beans.jpg'),
  'Snacks & Sweets': require('./img/snacks.jpg'),
  Dairy: require('./img/dairy.jpg'),
};

export const DEBUG_MODE = false;

export const giType = (value) => {
  if (value < LOW_GI_BOUNDARY) {
    return 'low';
  } else if (value < MEDIUM_GI_BOUNDARY) {
    return 'medium';
  }
  return 'high';
};
