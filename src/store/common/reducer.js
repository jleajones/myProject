import { SET_ERROR } from './actions/types';

const initialState = {
  error: ''
};

/**
 *
 * @param state
 * @param action
 * @returns {{error: string}|({error}&{error})}
 */
export default (state = initialState, action = {}) => {
  const { type, error } = action;
  if (type === SET_ERROR) {
    return {
      ...state,
      error
    };
  }

  return state;
};
