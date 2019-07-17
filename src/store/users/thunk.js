import { API_PATH } from '@store/constants';
import { get } from '@store/lib/request';

import { setError } from '@store/common/actions/creators';
import { fetchUsers, setUsers } from './actions/creators';

export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch(fetchUsers());
      const response = await get(`${API_PATH}/user`);
      dispatch(setUsers(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getUser = uid => {
  return async dispatch => {
    try {
      dispatch(fetchUsers());
      const response = await get(`${API_PATH}/user/${uid}`);
      dispatch(setUsers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
