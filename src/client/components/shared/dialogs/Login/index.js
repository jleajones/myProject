import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

import DialogTitle from '@material-ui/core/DialogTitle';

import Dialog from '../Dialog';

const LoginDialog = ({ handleClose, open }) => {
  return (
    <Dialog
      onClose={handleClose}
      label="login-dialog-title"
      title="Login"
      open={open}
    >
      <DialogTitle id="login-dialog-title">Login</DialogTitle>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={resp => {
          handleClose();
          console.log(resp);
        }}
        onFailure={e => {
          handleClose();
          console.log(e);
        }}
      />
    </Dialog>
  );
};

LoginDialog.defaultProps = {
  open: false
};

LoginDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool
};

export default LoginDialog;
