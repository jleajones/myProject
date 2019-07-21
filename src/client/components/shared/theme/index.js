import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

export const theme = createMuiTheme({});

export const themeS = {
  colors: {
    light: 'white',
    lightBg: '#cccccc',
    primary: 'red'
  }
};

/**
 *
 * @param children
 * @param muiTheme
 * @param styledTheme
 * @returns {*}
 * @constructor
 */
const MyThemeProvider = ({ children, muiTheme, styledTheme }) => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
  </MuiThemeProvider>
);

MyThemeProvider.defaultProps = {
  muiTheme: theme,
  styledTheme: themeS
};

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  muiTheme: PropTypes.shape(),
  styledTheme: PropTypes.shape()
};

export default MyThemeProvider;
