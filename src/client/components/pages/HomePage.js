import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <div>this is the home page..</div>
    </div>
  );
};

export default HomePage;
