import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
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

const MyThemeProvider = ({ children, muiTheme, styledTheme, sheetsManager }) => (
  <MuiThemeProvider theme={muiTheme} sheetsManager={sheetsManager}>
    <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
  </MuiThemeProvider>
);

MyThemeProvider.defaultProps = {
  muiTheme: theme,
  styledTheme: theme_s
};

export default MyThemeProvider;
