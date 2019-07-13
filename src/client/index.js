import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import ClientApp from '@client/core/components/ClientApp';
import configureStore from '@store/index';
import App from '@components/App';

loadableReady(() => {
  const store = configureStore(window.__INITIAL_STATE__);
  hydrate(
    <ClientApp store={store}>
      <App />
    </ClientApp>,
    document.getElementById('root')
  );
});
