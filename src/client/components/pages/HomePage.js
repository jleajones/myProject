import React from 'react';
import { Helmet } from 'react-helmet';
import { frontloadConnect } from 'react-frontload';

const frontload = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });
};

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

export default frontloadConnect(frontload)(HomePage);
