import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import JssProvider from 'react-jss/lib/JssProvider';

import { loadableReady } from '@loadable/component';
import {
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles';

import App from './components/App';
import { theme } from '@components/theme';

const generateClassName = createGenerateClassName();
loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <Frontload noServerRender>
        <JssProvider generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </JssProvider>
      </Frontload>
    </BrowserRouter>,
    document.getElementById('root')
  );
});
