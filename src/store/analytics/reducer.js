import { Types, PAGE_VIEW, INTERACTION } from './actions/types';

const initialState = {
  pageviews: [],
  interactions: []
};

export default (state = initialState, action = {}) => {
  const { type, data } = action;
  const pageviews = [...state.pageviews];
  const interactions = [...state.interactions];
  switch (type) {
    case Types[PAGE_VIEW].PENDING:
      return {
        ...state
      };
    case Types[PAGE_VIEW].SUCCESS:
      pageviews.push(data);
      return {
        ...state,
        pageviews
      };
    case Types[PAGE_VIEW].ERROR:
      return {
        ...state
      };
    case Types[INTERACTION].PENDING:
      return {
        ...state
      };
    case Types[INTERACTION].SUCCESS:
      pageviews.push(data);
      return {
        ...state,
        interactions
      };
    case Types[INTERACTION].ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};
