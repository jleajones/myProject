import { SET_ERROR } from './actions/types';

const initialState = {
  error: ''
};

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
