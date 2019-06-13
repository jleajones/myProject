import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export const theme_s = {
  colors: {
    light: 'white',
    lightBg: '#cccccc',
    primary: 'red'
  }
};

const MyThemeProvider = ({ children, muiTheme, styledTheme }) => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
  </MuiThemeProvider>
);

MyThemeProvider.defaultProps = {
  muiTheme: theme,
  styledTheme: theme_s
};

export default MyThemeProvider;
