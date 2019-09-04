import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@material-ui/core/Dialog';

const Dialog = ({ children, ...props }) => {
  return <MuiDialog {...props}>{children}</MuiDialog>;
};

Dialog.defaultProps = {
  open: false,
  fullScreen: false
};

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  fullScreen: PropTypes.bool
};

export default Dialog;
