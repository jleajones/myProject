import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
