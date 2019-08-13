import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import theme from './constants';

/**
 *
 * @param children
 * @param muiTheme
 * @returns {*}
 * @constructor
 */
const ThemeProvider = ({ children, muiTheme }) => (
  <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
);

ThemeProvider.defaultProps = {
  muiTheme: theme
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  muiTheme: PropTypes.shape()
};

export default ThemeProvider;
