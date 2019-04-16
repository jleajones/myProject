import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="This is the About..." />
      </Helmet>
      <div>this is the about page..</div>
    </div>
  );
};

export default AboutPage;
