import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from './types';

export const addFavourite = (favouriteId) => {
  return {
    type: ADD_FAVOURITE,
    payload: favouriteId,
  };
};

export const removeFavourite = (favouriteId) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: favouriteId,
  };
};
