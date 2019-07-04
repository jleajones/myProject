import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import { loadableReady } from '@loadable/component';

import configureStore from '@store/index';
import MyThemeProvider from '@shared/theme';
import App from '@components/App';

const ClientApp = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Frontload>
        <MyThemeProvider>
          <App />
        </MyThemeProvider>
      </Frontload>
    </BrowserRouter>
  </Provider>
);

loadableReady(() => {
  const store = configureStore(window.__INITIAL_STATE__);
  hydrate(<ClientApp store={store} />, document.getElementById('root'));
});
