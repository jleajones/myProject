import axios from 'axios';
import { API_PATH } from '@store/constants';
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
  console.log('dispatchIdentity::');
  return async dispatch => {
    dispatch(getIdentity());
    try {
      const response = await axios.get(`${API_PATH}/analytics`);
      dispatch(setIdentity(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const dispatchPageview = (trackingProperties = {}) => {
  console.log('dispatchPageview::');
  return async dispatch => {
    dispatch(pageview());
    try {
      const response = await axios.post(`${API_PATH}/analytics`, {
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
      const response = await axios.post(`${API_PATH}/analytics`, {
        ...trackingProperties,
        type: 'i'
      });
      dispatch(setInteraction(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
