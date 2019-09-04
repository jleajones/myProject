import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PATHS from '@constants/paths';
import Back from '@shared/Back';
import Link from '@shared/Link';
import NavMenu from '@shared/NavMenu';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    top: '50px'
  },
  title: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      '& :hover': {
        textDecoration: 'none'
      }
    }
  }
}));

/**
 *
 * @param location
 * @returns {*}
 * @constructor
 */
const NavBar = ({ location }) => {
  const classes = useStyles();
  const NavComponent =
    location.pathname === PATHS.driveWithUs.path ? Back : NavMenu;

  return (
    <AppBar
      className={classes.root}
      color="primary"
      position="sticky"
      elevation={1}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link
            to={PATHS.home.path}
            category="header"
            label="Logo"
            color="secondary"
          >
            <em>MyProj</em>
          </Link>
        </Typography>
        <NavComponent />
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(NavBar);
