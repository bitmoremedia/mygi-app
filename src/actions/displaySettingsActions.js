import {
  SET_SORT_ORDER,
  SET_TYPES_TO_DISPLAY,
  SET_GI_RANGE,
} from './types';

export const setSortOrder = (orderBy) => {
  return {
    type: SET_SORT_ORDER,
    payload: orderBy,
  };
};

export const setTypesToDisplay = (typesArray) => {
  return {
    type: SET_TYPES_TO_DISPLAY,
    payload: typesArray,
  };
};

export const setGiRange = (rangeArray) => {
  return {
    type: SET_GI_RANGE,
    payload: rangeArray,
  };
};
