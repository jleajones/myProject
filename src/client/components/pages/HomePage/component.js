import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { frontloadConnect } from 'react-frontload';
import Typography from '@material-ui/core/Typography';

import Page from '@shared/Page';
import Container from '@shared/Container';
import Footer from '@shared/Footer';

const fetchData = async ({ getCareers }) => {
  await getCareers();
};

const HomePage = ({ careers }) => {
  console.log(careers);
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
      <Container>
        <Typography>This is the home page...</Typography>
      </Container>
      <Footer />
    </Page>
  );
};

// export default HomePage;
export default frontloadConnect(fetchData)(HomePage);
