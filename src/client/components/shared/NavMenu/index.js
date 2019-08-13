import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import { camelCase } from '@clientLib/utils';

import PATHS from '@constants/paths';
import Link from '@shared/Link';

import items from './constants';
import lang from './language';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      '& :hover': {
        textDecoration: 'none'
      }
    }
  },
  link: {
    color: '#ffffff',
    textTransform: 'capitalize',
    margin: `0 ${theme.spacing(1)}px`
  },
  button: {
    marginLeft: theme.spacing(1),
    color: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(255, 255, 255, 0.55)',
    '&:hover': {
      color: 'rgba(255, 255, 255, 1)',
      borderColor: 'rgba(255, 255, 255, 1)'
    }
  }
}));

/**
 *
 * @returns {*}
 * @constructor
 */
const NavMenu = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      {items.map(item => (
        <Link
          key={item}
          to={PATHS[camelCase(item)].path}
          category="header"
          label={item.replace(/\s+/g, '-')}
          className={classes.link}
        >
          {lang[camelCase(item)]()}
        </Link>
      ))}

      <Button variant="outlined" size="small" className={classes.button}>
        Call Us Today
      </Button>
    </nav>
  );
};

export default NavMenu;
