/**
 *
 * @param store
 * @returns {function(*): function(*=): *}
 */
// eslint-disable-next-line consistent-return
const logger = store => next => action => {
  console.group(action.type || 'THUNK');
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
