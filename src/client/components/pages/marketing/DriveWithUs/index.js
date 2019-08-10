import React from 'react';
import { Helmet } from 'react-helmet';

import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Page from '@shared/Page';

import DriveWithUsForm from './components/DriveWithUsForm';

/**
 *
 * @returns {*}
 * @constructor
 */
const DriveWithUsPage = () => {
  return (
    <Page
      pageName="DriveWithUs"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/collection/4625959/1600x900")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <Helmet>
        <title>Drive with Us | LJ&amp;G Freight, LLC</title>
        <meta name="description" content="Drive with LG&J Freight" />
      </Helmet>
      <Fade in timeout={{ enter: 2000 }}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <Paper square>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    gutterBottom
                  >
                    <em>LJ&amp;G Freight</em> is looking for solo
                    owner-operators and teams with refrigerated experience. Fill
                    out the form and start driving your own success.
                  </Typography>
                  <Divider light />
                  <DriveWithUsForm />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </Page>
  );
};

export default DriveWithUsPage;
