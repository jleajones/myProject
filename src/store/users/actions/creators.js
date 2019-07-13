import { Types, FETCH_USERS } from './types';

export const fetchUsers = () => ({
  type: Types[FETCH_USERS].PENDING
});

export const setUsers = (data = {}) => {
  return {
    type: Types[FETCH_USERS].SUCCESS,
    data
  };
};
