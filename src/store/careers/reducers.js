import { Types, FETCH_CAREERS } from './actions/types';

const initialState = {
  list: []
};

/**
 *
 * @param state
 * @param action
 * @returns {{list: Array}|({list}&{list})}
 */
export default (state = initialState, action = {}) => {
  const { type, data } = action;
  switch (type) {
    case Types[FETCH_CAREERS].PENDING:
      return {
        ...state
      };
    case Types[FETCH_CAREERS].SUCCESS:
      return {
        ...state,
        list: data
      };
    case Types[FETCH_CAREERS].ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};
