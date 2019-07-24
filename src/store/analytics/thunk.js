import request from '@store/lib/request';

import { setError } from '@store/common/actions/creators';

import {
  pageview,
  setPageview,
  interaction,
  setInteraction,
  getIdentity,
  setIdentity
} from './actions/creators';

/**
 *
 * @returns {Function}
 */
export const dispatchIdentity = () => {
  return async dispatch => {
    dispatch(getIdentity());
    try {
      const response = await request.get(`/analytics`);
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
