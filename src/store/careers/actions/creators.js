import { Types, FETCH_CAREERS } from './types';

/**
 *
 * @returns {{type: string}}
 */
export const fetchCareers = () => ({
  type: Types[FETCH_CAREERS].PENDING
});

/**
 * 
 * @param data
 * @returns {{data, type: string}}
 */
export const setCareers = (data = {}) => {
  return {
    type: Types[FETCH_CAREERS].SUCCESS,
    data
  };
};
