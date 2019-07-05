import axios from 'axios';

import { fetchCareers, setCareers } from './actions/creators';

// TODO: create common store to handle 'error' && 'loading'
const setError = error => {
  console.log(error);
};

export default () => {
  return async dispatch => {
    try {
      dispatch(fetchCareers());
      const response = await axios.get('http://localhost:3001/api/jobs');
      dispatch(setCareers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
