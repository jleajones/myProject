import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useAppBarStyles = makeStyles({
  root: {
    flexGrow: 1,
    zIndex: 1150
  }
});

const useToolBarStyles = makeStyles({
  root: {
    minHeight: '50px'
  }
});

/**
 *
 * @returns {*}
 * @constructor
 */
const PromoBar = () => {
  const appBarClasses = useAppBarStyles();
  const toolBarClasses = useToolBarStyles({ height: '50px' });

  return (
    <AppBar
      className={appBarClasses.root}
      color="default"
      position="sticky"
      elevation={4}
    >
      <Toolbar className={toolBarClasses.root}>
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="caption">
              Instant quotes, and 24/7 customer service.
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" variant="outlined" size="small">
              Call Us Today
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(PromoBar);
