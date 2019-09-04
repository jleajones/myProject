import React from 'react';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import FooterLinks from '../FooterLinks';

const useStyles = makeStyles(theme => ({
  copyRight: {
    color: theme.palette.primary.main
  }
}));

const Basement = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Typography
          className={classes.copyRight}
          variant="caption"
          component="p"
        >
          All Rights Reserved. Copyright &copy; 2019
        </Typography>
        <FooterLinks
          linkVariant="caption"
          items={[
            'Terms of Use and Privacy Policy',
            'Accessibility',
            'Sitemap'
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default withTheme(Basement);
