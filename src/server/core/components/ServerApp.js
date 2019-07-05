import React from 'react';
import { Provider } from 'react-redux';
import { Frontload } from 'react-frontload';
import MyThemeProvider from '@shared/theme';
import App from '@components/App';
import { StaticRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServerApp = ({ req, staticContext, store }) => {
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

ServerApp.propTypes = {
  req: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  staticContext: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired
};

export default ServerApp;
