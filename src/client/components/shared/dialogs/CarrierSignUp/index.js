import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Dialog from '../Dialog';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const CarrierSignUp = ({ handleClose, open }) => {
  const classes = useStyles();
  const title = 'Ship With Us';
  return (
    <Dialog
      onClose={handleClose}
      label="ship-with-us-dialog-title"
      title={title}
      open={open}
      fullScreen
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};

CarrierSignUp.defaultProps = {
  open: false
};

CarrierSignUp.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool
};

export default CarrierSignUp;
