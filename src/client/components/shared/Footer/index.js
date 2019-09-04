import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Basement from './components/Basement';
import FooterGroup from './components/FooterGroup';

const useClasses = makeStyles(theme => ({
  root: {
    backgroundColor: '#093272',
    padding: '96px 0'
  },
  divider: {
    backgroundColor: '#07285A',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}));

/**
 *
 * @returns {*}
 * @constructor
 */
const Footer = ({ theme }) => {
  const classes = useClasses();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container justify="center">
          <Grid item md={8}>
            <Grid container justify="center">
              <FooterGroup title="shippers" items={['Ship with Us']} />
              <FooterGroup title="shippers" items={['Ship with Us']} />
              <FooterGroup title="shippers" items={['Ship with Us']} />
              <FooterGroup title="shippers" items={['Ship with Us']} />
              <Grid item xs={12} sm={3}>
                <Typography
                  variant="button"
                  component="p"
                  style={{
                    color: theme.palette.grey[200],
                    marginBottom: theme.spacing(2)
                  }}
                >
                  <b>company</b>
                </Typography>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(1)
                      }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(1)
                      }}
                    >
                      Customer Reviews
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(1)
                      }}
                    >
                      Careers
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                marginTop: theme.spacing(4)
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  component="p"
                  style={{
                    color: theme.palette.primary.light
                  }}
                >
                  Search Loads | Map Routes | Investors | Blog
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography
                  variant="button"
                  component="p"
                  style={{
                    color: theme.palette.grey[200],
                    marginBottom: theme.spacing(2)
                  }}
                >
                  <b>support</b>
                </Typography>
                <Grid container alignItems="center" justify="flex-start">
                  <Grid item>
                    <InfoIcon
                      style={{
                        width: '64px',
                        height: '64px',
                        marginRight: theme.spacing(2),
                        color: theme.palette.primary.light
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{
                        color: theme.palette.primary.light
                      }}
                    >
                      <b>FAQ & Contact</b>
                    </Typography>
                  </Grid>
                </Grid>
                <Divider
                  style={{
                    backgroundColor: '#07285A',
                    marginTop: theme.spacing(2),
                    marginBottom: theme.spacing(2)
                  }}
                />
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      variant="button"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(2),
                        marginTop: theme.spacing(2)
                      }}
                    >
                      <b>other</b>
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(1)
                      }}
                    >
                      partnerships@ljgfreight.com
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        color: theme.palette.primary.light,
                        marginBottom: theme.spacing(1)
                      }}
                    >
                      media@ljgfreight.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <Basement />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.shape().isRequired
};

export default withTheme(Footer);
