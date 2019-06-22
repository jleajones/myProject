import React from 'react';
import { Frontload } from 'react-frontload';
import MyThemeProvider from '@shared/theme';
import App from '@components/App';
import {StaticRouter} from "react-router-dom";

export default ({ req, staticContext }) => (
  <StaticRouter location={req.url} context={staticContext}>
    <Frontload isServer>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </Frontload>
  </StaticRouter>
);
