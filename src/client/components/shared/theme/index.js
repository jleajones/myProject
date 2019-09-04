import React from 'react';
import MUIThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import theme from './constants';

/**
 *x`
 * @param children
 * @param muiTheme
 * @returns {*}
 * @constructor
 */
const Theme = ({ children }) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
