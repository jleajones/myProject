import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import { loadableReady } from '@loadable/component';

import { getClientStore } from '@store/index';
import MyThemeProvider from '@shared/theme';
import App from '@components/App';

loadableReady(() => {
  const store = getClientStore();
  hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Frontload>
        <MyThemeProvider>
          <App />
        </MyThemeProvider>
      </Frontload>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );
});
