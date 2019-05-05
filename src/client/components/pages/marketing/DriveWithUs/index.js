import React from 'react';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

import Page from '@components/Page';
import Container from '@components/Container';
import DriveWithUsForm from '@components/DriveWithUsForm';
import { Divider, Typography } from '@material-ui/core';

import styles from './stylesheet.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

const DriveWithUsPage = props => {
  return (
    <Page
      name="DriveWithUs"
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
      <Header />
      <Fade in={true}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8}>
              <Paper classes={{ root: styles.paperContainer }} square={true}>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  <em>LJ&amp;G Freight</em> is looking for solo owner-operators
                  and teams with refrigerated experience. Fill out the form and
                  start driving your own success.
                </Typography>
                <Divider light />
                <DriveWithUsForm />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
      <Footer />
    </Page>
  );
};

export default DriveWithUsPage;
