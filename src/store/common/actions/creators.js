import { SET_ERROR, SOME_OTHER_COMMON_THING } from './types';

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const setSomeCommonThing = () => ({
  type: SOME_OTHER_COMMON_THING
});
