import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { frontloadConnect } from 'react-frontload';
import Typography from '@material-ui/core/Typography';

import Page from '@shared/Page';
import Container from '@shared/Container';
import Header from '@shared/Header';
import Footer from '@shared/Footer';

// import axios from 'axios';

const frontload = async () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });

  return p;
};

const HomePage = () => {
  return (
    <Page
      name="HomePage"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/collection/4625959/1600x900")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <Header />
      <Container>
        <Typography>This is the home page...</Typography>
      </Container>
      <Footer />
    </Page>
  );
};

// export default HomePage;
export default frontloadConnect(frontload)(HomePage);
