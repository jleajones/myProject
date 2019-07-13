import { combineReducers } from 'redux';

import careers from './careers';
import users from './users';

const root = combineReducers({
  careers,
  users
});

export default root;
