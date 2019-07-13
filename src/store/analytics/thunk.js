import axios from 'axios';
import { API_PATH } from '@store/constants';
import { setError } from '@store/common/actions/creators';

import {
  pageview,
  setPageview,
  interaction,
  setInteraction
} from './actions/creators';

export const dispatchPageview = (trackingProperties = {}) => {
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
