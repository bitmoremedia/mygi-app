import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from '../actions/types';

export const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVOURITE: {
      return {
        ...state,
        [payload]: true,
      };
    }
    case REMOVE_FAVOURITE: {
      const favourites = { ...state };
      delete favourites[payload];
      return favourites;
    }
    default: return state;
  }
};

export default reducer;

export const isFavourite = (favourites, favouriteId) => {
  return !!(favourites[favouriteId]);
};

export const favouriteItems = (allItems, favourites) => {
  return allItems.filter((food) => {
    return (favourites[food.id]);
  });
};
