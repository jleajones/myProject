import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
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
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
