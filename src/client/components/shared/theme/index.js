import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';

export const theme = createMuiTheme({});

theme.overrides = {
  MuiContainer: {
    root: {
      [theme.breakpoints.down('xl')]: {
        paddingLeft: 0,
        paddingRight: 0
      }
    }
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
