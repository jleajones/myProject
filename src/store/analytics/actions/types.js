import { createAsyncActionTypes } from '@store/lib';

export const PAGE_VIEW = 'PAGE_VIEW';
export const INTERACTION = 'PAGE_VIEW';
export const IDENTITY = 'IDENTITY';
export const EVENTS = 'EVENTS';
export const Types = createAsyncActionTypes([
  PAGE_VIEW,
  INTERACTION,
  IDENTITY,
  EVENTS
]);
