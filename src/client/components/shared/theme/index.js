import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {
  ANIMATIONS,
  BREAKPOINTS,
  COLORS,
  FONTS,
  TYPOGRAPHY
} from '@shared/theme/constants';

export const theme = createMuiTheme({});

const mediaQueries = {
  mobile: `@media (max-width:${BREAKPOINTS.sm - 1}px)`,
  tablet: `@media (min-width:${BREAKPOINTS.sm}px)
  and (max-width:${BREAKPOINTS.md - 1}px)`,
  desktop: `@media (min-width:${BREAKPOINTS.md}px)
  and (max-width:${BREAKPOINTS.lg - 1}px)`,
  desktopXL: `@media (min-width:${BREAKPOINTS.lg}px)`
};

const addStylesFor = devices => {
  let css = '';

  if (devices.mobile) {
    css += `${mediaQueries.mobile} {${devices.mobile}}`;
  }

  if (devices.tablet) {
    css += `${mediaQueries.tablet} {${devices.tablet}}`;
  }

  if (devices.desktop) {
    css += `${mediaQueries.desktop} {${devices.desktop}}`;
  }

  if (devices.desktopXL) {
    css += `${mediaQueries.desktopXL} {${devices.desktopXL}}`;
  }

  return css;
};

const addStylesForDevices = (devices, styles) => {
  let css = '';

  for (let i = 0; i < devices.length; i += 1) {
    const device = devices[i];
    if (Object.prototype.hasOwnProperty.call(mediaQueries, device)) {
      css += `${mediaQueries[device]} { ${styles} }`;
    }
  }

  return css;
};

export const themeS = {
  addStylesFor,
  addStylesForDevices,
  animations: {
    ...ANIMATIONS
  },
  breakpoints: {
    ...BREAKPOINTS
  },
  colors: {
    ...COLORS
  },
  fonts: {
    ...FONTS
  },
  typography: {
    ...TYPOGRAPHY
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
