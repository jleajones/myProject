import reducers from './root';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({});

export default createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export const getClientStore = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const initialState = window.__INITIAL_STATE__;
  return createStore(
    reducers,
    initialState,
    composeEnhancer.apply(null, [middleware])
  );
};
