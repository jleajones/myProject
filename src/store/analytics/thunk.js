import { API_PATH } from '@store/constants';
import { get, post } from '@store/lib/request';

import { setError } from '@store/common/actions/creators';

import {
  pageview,
  setPageview,
  interaction,
  setInteraction,
  getIdentity,
  setIdentity
} from './actions/creators';

export const dispatchIdentity = () => {
  return async dispatch => {
    dispatch(getIdentity());
    try {
      const response = await get(`${API_PATH}/analytics`);
      dispatch(setIdentity(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const dispatchPageview = (trackingProperties = {}) => {
  return async dispatch => {
    dispatch(pageview());
    try {
      const response = await post(`${API_PATH}/analytics`, {
        ...trackingProperties,
        type: 'p'
      });
      dispatch(setPageview(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const dispatchInteraction = (trackingProperties = {}) => {
  return async dispatch => {
    try {
      dispatch(interaction());
      const response = await post(`${API_PATH}/analytics`, {
        ...trackingProperties,
        type: 'i'
      });
      dispatch(setInteraction(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
