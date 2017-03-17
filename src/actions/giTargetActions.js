import {
  SET_GI_TARGET,
} from './types';

export const setGiTarget = (target) => {
  return {
    type: SET_GI_TARGET,
    payload: target,
  };
};
