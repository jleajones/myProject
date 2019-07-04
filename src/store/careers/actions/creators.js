import TYPES, { FETCH_CAREERS } from './types';

export const fetchCareers = () => ({
  type: TYPES[FETCH_CAREERS].PENDING
});

export const setCareers = (data = {}) => {
  return {
    type: TYPES[FETCH_CAREERS].SUCCESS,
    data
  };
};
