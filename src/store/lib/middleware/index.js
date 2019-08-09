import thunk from 'redux-thunk';
import loggerMiddleware from './logger';

const middleware = [thunk];

if (process.env.DEBUG) middleware.unshift(loggerMiddleware);
export default middleware;
