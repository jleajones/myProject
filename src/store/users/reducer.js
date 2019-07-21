import { Types, FETCH_USERS } from './actions/types';

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
    case Types[FETCH_USERS].PENDING:
      return {
        ...state
      };
    case Types[FETCH_USERS].SUCCESS:
      return {
        ...state,
        list: data
      };
    case Types[FETCH_USERS].ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};
