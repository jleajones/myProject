import TYPES, { FETCH_JOBS } from '@root/src/store/jobs/actions/types';

export const fetchJobs = () => ({
  type: TYPES[FETCH_JOBS].PENDING
});

export const setJobs = (data = {}) => {
  return {
    type: TYPES[FETCH_JOBS].SUCCESS,
    data
  };
};
