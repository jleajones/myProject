import React from 'react';
import { Provider } from 'react-redux';
import Theme from '@shared/theme';
import App from '@components/App';
import { StaticRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @param req
 * @param staticContext
 * @param store
 * @returns {*}
 * @constructor
 */
const ServerApp = ({ req, staticContext, store }) => {
  return (
    <Theme>
      <Provider store={store}>
        <StaticRouter location={req.url} context={staticContext}>
          <App />
        </StaticRouter>
      </Provider>
    </Theme>
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
