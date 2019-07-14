import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducerEnhancer from '@store/lib/enhancers/monitorReducer';
import reducers from '@store/root';
import middleware from '@store/lib/middleware';

export default preloadedState => {
  const composeEnhancers = composeWithDevTools({}) || compose;
  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    monitorReducerEnhancer
  );

  const store = createStore(reducers, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers));
  }

  return store;
};
