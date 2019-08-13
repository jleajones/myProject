import thunk from 'redux-thunk';
import loggerMiddleware from './logger';

const middleware = [thunk];

if (process.env.APP_MODE === 'debug') {
  middleware.unshift(loggerMiddleware);
}

export default middleware;
