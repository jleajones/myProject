import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page'
import styles from './stylesheet.css';

const AboutPage = () => {
  return (
    <Page name='AboutPage'>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="This is the About..." />
      </Helmet>
      <div className={styles.body}>this is the about page..</div>
    </Page>
  );
};

export default AboutPage;
