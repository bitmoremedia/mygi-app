import {
  SET_GI_TARGET,
} from '../actions/types';

const initialState = {
  targets: {
    high: 0,
    medium: 0,
    low: 21
  },
};

const modifyOtherValues = (state, diff, first, second) => {
  const newState = { ...state };
  let iterator = 0;
  // distribute the diff across the other values according to priority order
  if (diff > 0) {
    // subtract the diff from other values
    while (iterator < diff) {
      if (newState[first] === 0) {
        newState[second] -= 1;
      } else {
        newState[first] -= 1;
      }
      iterator += 1;
    }
  } else if (diff < 0) {
    // add the diff to other values
    while (iterator > diff) {
      if (newState[first] === 21) {
        newState[second] += 1;
      } else {
        newState[first] += 1;
      }
      iterator -= 1;
    }
  }

  // final clean up to make sure out total is not more than 21
  // just in case things go out of sync!
  if (newState.high + newState.medium + newState.low !== 21) {
    console.log('** TOTAL IS TOO MUCH - SO CLEANING UP **');
    return { ...initialState.targets };
  }

  return newState;
};

const setTargetByType = (state, { type, value }) => {
  const high = (type === 'high') ? value : state.targets.high;
  const medium = (type === 'medium') ? value : state.targets.medium;
  const low = (type === 'low') ? value : state.targets.low;
  const diff = value - state.targets[type];
  // LOGIC
  // high - add/remove from medium if available else use low
  // medium - add/remove from low if available else use high
  // low - add/remove from medium if available else use high
  switch (type) {
    case 'high':
      return modifyOtherValues({ high, medium, low }, diff, 'low', 'medium');
    case 'medium':
      return modifyOtherValues({ high, medium, low }, diff, 'low', 'high');
    case 'low':
      return modifyOtherValues({ high, medium, low }, diff, 'medium', 'high');
    default:
      return { high, medium, low };
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GI_TARGET: {
      return {
        ...state,
        targets: setTargetByType(state, payload),
      };
    }
    default: return state;
  }
};

export const targets = (targetsState) => {
  return targetsState;
};

export default reducer;
