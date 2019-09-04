import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import { camelCase } from '@clientLib/utils';
import PATHS from '@constants/paths';

import Link from '@shared/Link';
import LoginDialog from '@shared/dialogs/Login';
import CarrierSignUp from '@shared/dialogs/CarrierSignUp';

import items from './constants';
import lang from './language';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  link: {
    color: 'rgba(255, 255, 255, 0.55)',
    textTransform: 'capitalize',
    margin: `0 ${theme.spacing(1)}px`,
    '&:hover': {
      color: 'rgba(255, 255, 255, 1)'
    }
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}));

/**
 *
 * @returns {*}
 * @constructor
 */
const NavMenu = () => {
  const classes = useStyles();
  const [loginOpen, setLoginOpen] = useState(false);
  const [shipWithUsOpen, setShipWithUpOpen] = useState(false);

  const handleOpenDialog = slug => () => {
    if (slug === 'login') setLoginOpen(true);
    if (slug === 'shipWithUs') setShipWithUpOpen(true);
  };

  const handleCloseDialog = slug => () => {
    if (slug === 'login') setLoginOpen(false);
    if (slug === 'shipWithUs') setShipWithUpOpen(false);
  };

  return (
    <nav className={classes.root}>
      {items.map(item => {
        const slug = camelCase(item.display);
        return (
          <Link
            key={item.display}
            to={!item.isModal ? PATHS[slug].path : {}}
            category="header"
            label={item.display.replace(/\s+/g, '-')}
            className={classes.link}
            onClick={item.isModal ? handleOpenDialog(slug) : () => {}}
          >
            {lang[slug]()}
          </Link>
        );
      })}

      <Button
        variant="outlined"
        size="small"
        color="secondary"
        className={classes.button}
      >
        Sign Up
      </Button>
      <LoginDialog handleClose={handleCloseDialog('login')} open={loginOpen} />
      <CarrierSignUp
        handleClose={handleCloseDialog('shipWithUs')}
        open={shipWithUsOpen}
      />
    </nav>
  );
};

export default NavMenu;
