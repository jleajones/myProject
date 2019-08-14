import {
  Types,
  PAGE_VIEW,
  INTERACTION,
  IDENTITY,
  EVENTS
} from './actions/types';

const initialState = {
  pageviews: [],
  interactions: [],
  uuid: '',
  events: []
};

/**
 *
 * @param state
 * @param action
 * @returns {({pageviews, uuid, interactions}&{interactions: *[]})|({pageviews, uuid, interactions}&{pageviews: *[]})|{pageviews: Array, uuid: string, interactions: Array}|({pageviews, uuid, interactions}&{uuid})}
 */
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
      interactions.push(data);
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
    case Types[EVENTS].SUCCESS:
      return {
        ...state,
        events: data
      };
    default:
      return state;
  }
};
