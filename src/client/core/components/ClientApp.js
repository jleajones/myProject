import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Theme from '@shared/theme';

/**
 *
 * @param store
 * @param children
 * @returns {*}
 * @constructor
 */
const ClientApp = ({ store, children }) => (
  <Theme>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </Theme>
);

ClientApp.propTypes = {
  store: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired
};

export default ClientApp;
