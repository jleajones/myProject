import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffffa8',
      main: '#fff176',
      dark: '#cabf45',
      contrastText: '#000000'
    }
  }
});

// theme.overrides = {
//   MuiContainer: {
//     root: {
//       [theme.breakpoints.down('xl')]: {
//         paddingLeft: 0,
//         paddingRight: 0
//       }
//     }
//   }
// };

export default theme;

// export const ANIMATIONS = {};
//
// export const BREAKPOINTS = {
//   xs: 320,
//   sm: 768,
//   md: 1024,
//   lg: 1280,
//   xl: 1920
// };
//
// export const COLORS = {
//   light: 'white',
//   lightBg: '#cccccc',
//   primary: 'red'
// };
//
// export const FONTS = {};
//
// export const TYPOGRAPHY = {};
