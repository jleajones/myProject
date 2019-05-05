import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '../../shared/Page';
import Container from '@components/Container';
import Typography from '@material-ui/core/Typography';
import Header from "@components/Header";
import Fade from "@material-ui/core/Fade";
import Footer from "@components/Footer";
// import { frontloadConnect } from 'react-frontload';

// const frontload = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('ok');
//     }, 2000);
//   });
// };

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
        <Typography>This is the home page</Typography>
      </Container>
      <Footer />
    </Page>
  );
};

export default HomePage;
// export default frontloadConnect(frontload)(HomePage);
