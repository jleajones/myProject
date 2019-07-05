import { Types, FETCH_CAREERS } from './types';

export const fetchCareers = () => ({
  type: Types[FETCH_CAREERS].PENDING
});

export const setCareers = (data = {}) => {
  return {
    type: Types[FETCH_CAREERS].SUCCESS,
    data
  };
};
