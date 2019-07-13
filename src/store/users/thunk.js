import axios from 'axios';
import { API_PATH } from '@store/constants';

import { fetchUsers, setUsers } from './actions/creators';

// TODO: create common store to handle 'error' && 'loading'
const setError = error => {
  console.log(error);
};

export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch(fetchUsers());
      const response = await axios.get(`${API_PATH}/users`);
      dispatch(setUsers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getUser = uid => {
  return async dispatch => {
    try {
      dispatch(fetchUsers());
      const response = await axios.get(`${API_PATH}/user/${uid}`);
      dispatch(setUsers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
