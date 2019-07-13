import { combineReducers } from 'redux';

import analytics from './analytics';
import careers from './careers';
import common from './common';
import users from './users';

const root = combineReducers({
  careers,
  users,
  analytics,
  common
});

export default root;
