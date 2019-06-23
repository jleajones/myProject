export const FETCH_JOBS = 'FETCH_JOBS';

export default {
  [FETCH_JOBS]: {
    PENDING: `${FETCH_JOBS}.PENDING`,
    ERROR: `${FETCH_JOBS}.ERROR`,
    SUCCESS: `${FETCH_JOBS}.SUCCESS`
  }
};
