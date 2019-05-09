import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import JssProvider from 'react-jss/lib/JssProvider';
import MyThemeProvider from '@components/theme';

import { loadableReady } from '@loadable/component';
import {
  createGenerateClassName
} from '@material-ui/core/styles';

import App from './components/App';

const generateClassName = createGenerateClassName();
loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <Frontload noServerRender>
        <JssProvider generateClassName={generateClassName}>
          <MyThemeProvider>
            <App />
          </MyThemeProvider>
        </JssProvider>
      </Frontload>
    </BrowserRouter>,
    document.getElementById('root')
  );
});
