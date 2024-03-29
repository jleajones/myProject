import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';

/**
 *
 * @returns {*}
 * @constructor
 */
const AboutPage = () => {
  return (
    <Page pageName="AboutPage">
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="This is the About..." />
      </Helmet>
      <div>this is the about page..</div>
    </Page>
  );
};

export default AboutPage;
