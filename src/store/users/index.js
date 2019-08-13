import { Types, FETCH_USERS } from './actions/types';

const initialState = {
  data: [],
  loading: false
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
        ...state,
        loading: true
      };
    case Types[FETCH_USERS].SUCCESS:
      return {
        ...state,
        data,
        loading: false
      };
    case Types[FETCH_USERS].ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
