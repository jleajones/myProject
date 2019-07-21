import { Types, PAGE_VIEW, INTERACTION, IDENTITY } from './types';

/**
 *
 * @returns {{type: string}}
 */
export const pageview = () => ({
  type: Types[PAGE_VIEW].PENDING
});

/**
 *
 * @param data
 * @returns {{data, type: string}}
 */
export const setPageview = (data = {}) => {
  return {
    type: Types[PAGE_VIEW].SUCCESS,
    data
  };
};

/**
 *
 * @returns {{type: string}}
 */
export const interaction = () => ({
  type: Types[INTERACTION].PENDING
});

/**
 *
 * @param data
 * @returns {{data, type: string}}
 */
export const setInteraction = (data = {}) => {
  return {
    type: Types[INTERACTION].SUCCESS,
    data
  };
};

/**
 *
 * @returns {{type: string}}
 */
export const getIdentity = () => ({
  type: Types[IDENTITY].PENDING
});

/**
 *
 * @param data
 * @returns {{data, type: string}}
 */
export const setIdentity = (data = {}) => {
  return {
    type: Types[IDENTITY].SUCCESS,
    data
  };
};
