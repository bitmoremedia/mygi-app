import _ from 'lodash';

import {
  SET_SORT_ORDER,
  SET_TYPES_TO_DISPLAY,
  SET_GI_RANGE,
} from '../actions/types';

import giDataObject from '../data/gi-by-group.json';
import { giType } from '../config';

const allData = _.values(giDataObject);

export const getItemsToDisplayByType = (typeArray, allItems, sortOrder) => {
  const filteredItems = allItems.filter(item => (typeArray.indexOf(giType(item.gi)) > -1));
  return getItemsToDisplayBySortOrder(sortOrder, filteredItems);
};

export const getItemsToDisplayByRange = (giRange, allItems, sortOrder) => {
  return getItemsToDisplayBySortOrder(sortOrder, allItems);
};

export const getItemsToDisplayBySortOrder = (sortOrder, itemsToSort) => {
  if (sortOrder === 'Alphabetical') {
    return _.sortBy(itemsToSort, 'name');
  } else if (sortOrder === 'Gi Value') {
    return _.sortBy(itemsToSort, 'gi');
  }
  return itemsToSort;
};

const initialState = {
  itemsToDisplay: getItemsToDisplayBySortOrder('Alphabetical', allData),
  allItems: getItemsToDisplayBySortOrder('Alphabetical', allData),
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TYPES_TO_DISPLAY: {
      return {
        ...state,
        itemsToDisplay: getItemsToDisplayByType(payload, state.allItems, state.sortOrder)
      };
    }
    case SET_GI_RANGE: {
      return {
        ...state,
        itemsToDisplay: getItemsToDisplayByRange(payload, state.allItems, state.sortOrder)
      };
    }
    case SET_SORT_ORDER: {
      return {
        ...state,
        itemsToDisplay: getItemsToDisplayBySortOrder(payload, state.itemsToDisplay)
      };
    }
    default: return state;
  }
};

export default reducer;

export const categoryList = (allItems) => {
  const list = [];
  const categoryMap = {};
  allItems.forEach((food) => {
    if (!categoryMap[food.category]) {
      categoryMap[food.category] = true;
      list.push({ category: food.category });
    }
  });
  return _.sortBy(list, 'category');
};

export const foodListByCategory = (itemsToDisplay, category) => {
  return itemsToDisplay.filter(food => (food.category === category));
};
