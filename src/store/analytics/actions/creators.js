import { Types, PAGE_VIEW, INTERACTION } from './types';

export const pageview = () => ({
  type: Types[PAGE_VIEW].PENDING
});

export const setPageview = (data = {}) => {
  return {
    type: Types[PAGE_VIEW].SUCCESS,
    data
  };
};

export const interaction = () => ({
  type: Types[INTERACTION].PENDING
});

export const setInteraction = (data = {}) => {
  return {
    type: Types[INTERACTION].SUCCESS,
    data
  };
};
