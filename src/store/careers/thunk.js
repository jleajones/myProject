import request from '@store/lib/request';

import { setError } from '@store/common/actions/creators';
import { fetchCareers, setCareers } from './actions/creators';

/**
 *
 * @returns {Function}
 */
export default () => {
  return async dispatch => {
    try {
      dispatch(fetchCareers());
      const response = await request.get(`/jobs`);
      dispatch(setCareers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
