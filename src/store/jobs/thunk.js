import axios from 'axios';

import { fetchJobs, setJobs } from './actions/creators';

// TODO: create common store to handle 'error' && 'loading'
const setError = error => {
  console.log(error);
};

export const getJobs = () => {
  return async dispatch => {
    try {
      dispatch(fetchJobs());
      const response = await axios.get('http://localhost:3001/api/jobs');
      dispatch(setJobs(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
