import thunk from 'redux-thunk';
import loggerMiddleware from './logger';

const middleware = [loggerMiddleware, thunk];
export default middleware;
