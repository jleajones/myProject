import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { Divider, Typography } from '@material-ui/core';

import Page from '@shared/Page';
import Header from '@shared/Header';
import Footer from '@shared/Footer';
import Container from '@shared/Container';
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
      <Header />
      <Fade in>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8}>
              <StyledPaper square>
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
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
      <Footer />
    </Page>
  );
};

const StyledPaper = styled(Paper)`
  padding: 32px;
  margin: 24px 0;
  background-color: rgba(255, 255, 255, 0.9) !important;

  @media only screen and (max-width: 600px) {
    padding: 32px 16px;
    margin: 24px 0;
  }
`;

export default DriveWithUsPage;
