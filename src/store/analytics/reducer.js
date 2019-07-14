import { Types, PAGE_VIEW, INTERACTION, IDENTITY } from './actions/types';

const initialState = {
  pageviews: [],
  interactions: [],
  uuid: ''
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
    case Types[IDENTITY].PENDING:
      return {
        ...state
      };
    case Types[IDENTITY].SUCCESS:
      return {
        ...state,
        uuid: data
      };
    default:
      return state;
  }
};
