import thunk from 'redux-thunk/index';
import loggerMiddleware from './logger';

const middleware = [loggerMiddleware, thunk];
export default middleware;
