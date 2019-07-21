import { SET_ERROR, SOME_OTHER_COMMON_THING } from './types';

/**
 *
 * @param error
 * @returns {{type: string, error: *}}
 */
export const setError = error => ({
  type: SET_ERROR,
  error
});

/**
 *
 * @returns {{type: string}}
 */
export const setSomeCommonThing = () => ({
  type: SOME_OTHER_COMMON_THING
});
