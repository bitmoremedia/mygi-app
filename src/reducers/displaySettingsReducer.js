import {
  SET_SORT_ORDER,
  SET_TYPES_TO_DISPLAY,
  SET_GI_RANGE,
} from '../actions/types';

const initialState = {
  sortOrder: 'Alphabetical',
  typesToDisplay: ['high', 'medium', 'low'],
  giRange: [0, 150],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TYPES_TO_DISPLAY: {
      return {
        ...state,
        typesToDisplay: payload,
      };
    }
    case SET_GI_RANGE: {
      // NB THIS MAY ALSO IMPACT THE TYPES TO DISPLAY...
      // the two could modify each other... or be mutually exclusive
      // let the best UX dictate which is best
      return {
        ...state,
        giRange: payload,
      };
    }
    case SET_SORT_ORDER: {
      return {
        ...state,
        sortOrder: payload,
      };
    }
    default: return state;
  }
};

export default reducer;
