import { Types, FETCH_USERS } from './types';

/**
 *
 * @returns {{type: string}}
 */
export const fetchUsers = () => ({
  type: Types[FETCH_USERS].PENDING
});

/**
 *
 * @param data
 * @returns {{data, type: string}}
 */
export const setUsers = (data = {}) => {
  return {
    type: Types[FETCH_USERS].SUCCESS,
    data
  };
};
