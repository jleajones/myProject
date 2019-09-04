import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import DialogTitle from '@material-ui/core/DialogTitle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import PATHS from '@constants/paths';
import Link from '@shared/Link';

import Dialog from '../Dialog';

const useClasses = makeStyles(theme => ({
  login: {
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    height: '38px',
    marginBottom: theme.spacing(2),
    '& > div': {
      position: 'absolute',
      left: '1px',
      height: '36px',
      margin: '0 !important'
    },
    '& > span': {
      paddingLeft: '0 !important',
      paddingRight: '0 !important'
    }
  }
}));

const LoginDialog = ({ handleClose, open, history }) => {
  const classes = useClasses();
  return (
    <Dialog
      onClose={handleClose}
      label="login-dialog-title"
      title="Login"
      open={open}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="login-dialog-title">Login</DialogTitle>
      <DialogContent dividers>
        <GoogleLogin
          className={classes.login}
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={resp => {
            console.log(resp);
            handleClose();
            history.push(PATHS.dashboard.path);
          }}
          onFailure={e => {
            handleClose();
            console.log(e);
          }}
          style={{
            width: '200px'
          }}
          theme="dark"
        />
      </DialogContent>
      <DialogContent>
        <Typography>Log in with MyProj Account</Typography>
        <Typography variant="body2">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          No account? No problem! <Link>Create one today</Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

LoginDialog.defaultProps = {
  open: false
};

LoginDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  open: PropTypes.bool
};

export default withRouter(LoginDialog);
