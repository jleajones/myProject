import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import PATHS from '@constants/paths';
import Back from '@shared/Back';
import Link from '@shared/Link';
import NavMenu from '@shared/NavMenu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    '& a': {
      color: '#ffffff',
      textDecoration: 'none',
      '& :hover': {
        textDecoration: 'none'
      }
    }
  }
});

/**
 *
 * @param location
 * @returns {*}
 * @constructor
 */
const Header = ({ location }) => {
  const classes = useStyles();
  const NavComponent =
    location.pathname === PATHS.driveWithUs.path ? Back : NavMenu;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={PATHS.home.path} category="header" label="Logo">
              MyProj
            </Link>
          </Typography>
          <NavComponent />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Header);
