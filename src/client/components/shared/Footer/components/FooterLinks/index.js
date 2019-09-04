import React from 'react';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import Grid from '@material-ui/core/Grid';

import Link from '@shared/Link';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light
    }
  },
  divider: {
    color: theme.palette.primary.main
  }
}));

const FooterLinks = ({ items, linkVariant }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {items.map((item, idx) => {
        return (
          <React.Fragment key={item}>
            <Grid item>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link className={classes.link} label={`footer-link-${item}`}>
                <Typography variant={linkVariant}>{item}</Typography>
              </Link>
            </Grid>
            {idx < items.length - 1 && (
              <Grid item>
                <span>
                  <Typography className={classes.divider} variant="body1">
                    |
                  </Typography>
                </span>
              </Grid>
            )}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

FooterLinks.defaultProps = {
  linkVariant: 'body1'
};

FooterLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkVariant: PropTypes.string
};

export default withTheme(FooterLinks);
