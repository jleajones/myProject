import React from 'react';
import { Provider } from 'react-redux';
import { Frontload } from 'react-frontload';
import MyThemeProvider from '@shared/theme';
import App from '@components/App';
import { StaticRouter } from 'react-router-dom';

export default ({ req, staticContext, store }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={req.url} context={staticContext}>
        <Frontload isServer>
          <MyThemeProvider>
            <App />
          </MyThemeProvider>
        </Frontload>
      </StaticRouter>
    </Provider>
  );
};
