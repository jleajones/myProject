import Types from './actions/types';

const initialState = {
  list: []
};

export default (state = initialState, action = {}) => {
  const { type, data } = action;
  switch (type) {
    case Types.FETCH_JOBS.PENDING:
      return {
        ...state
      };
    case Types.FETCH_JOBS.SUCCESS:
      return {
        ...state,
        list: data
      };
    case Types.FETCH_JOBS.ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

