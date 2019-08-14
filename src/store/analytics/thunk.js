import request from '@store/lib/request';

import { setError } from '@store/common/actions/creators';

import {
  pageview,
  setPageview,
  interaction,
  setInteraction,
  getIdentity,
  setIdentity,
  getEvents,
  setEvents
} from './actions/creators';

/**
 *
 * @returns {Function}
 */
export const dispatchIdentity = (trackingProperties = {}) => {
  return async dispatch => {
    dispatch(getIdentity());
    try {
      const response = await request.post(`/analytics/identify`, {
        ...trackingProperties
      });
      dispatch(setIdentity(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

/**
 *
 * @param trackingProperties
 * @returns {Function}
 */
export const dispatchPageview = (trackingProperties = {}) => {
  return async dispatch => {
    dispatch(pageview());
    try {
      const response = await request.post(`/analytics`, {
        ...trackingProperties,
        type: 'p'
      });
      dispatch(setPageview(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

/**
 *
 * @param trackingProperties
 * @returns {Function}
 */
export const dispatchInteraction = (trackingProperties = {}) => {
  return async dispatch => {
    try {
      dispatch(interaction());
      const response = await request.post(`/analytics`, {
        ...trackingProperties,
        type: 'i'
      });
      dispatch(setInteraction(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

/**
 *
 * @returns {Function}
 */
export const fetchEvents = () => {
  return async dispatch => {
    try {
      dispatch(getEvents());
      const response = await request.get(`/analytics`);
      dispatch(setEvents(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
