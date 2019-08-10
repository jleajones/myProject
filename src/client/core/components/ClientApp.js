import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import ThemeProvider from '@shared/theme';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param store
 * @param children
 * @returns {*}
 * @constructor
 */
const ClientApp = ({ store, children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Frontload>
        <ThemeProvider>{children}</ThemeProvider>
      </Frontload>
    </BrowserRouter>
  </Provider>
);

ClientApp.propTypes = {
  store: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired
};

export default ClientApp;
