import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import { loadableReady } from '@loadable/component';

import MyThemeProvider from '@shared/theme';
import App from '@components/App';

loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <Frontload>
        <MyThemeProvider>
          <App />
        </MyThemeProvider>
      </Frontload>
    </BrowserRouter>,
    document.getElementById('root')
  );
});
