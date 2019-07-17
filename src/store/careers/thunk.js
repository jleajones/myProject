import { API_PATH } from '@store/constants';
import { get } from '@store/lib/request';

import { setError } from '@store/common/actions/creators';
import { fetchCareers, setCareers } from './actions/creators';

export default () => {
  return async dispatch => {
    try {
      dispatch(fetchCareers());
      const response = await get(`${API_PATH}/jobs`);
      dispatch(setCareers(response.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
