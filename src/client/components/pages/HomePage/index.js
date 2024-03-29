import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import Hero from '@pages/HomePage/components/Hero';
import Features from '@pages/HomePage/components/Features';
import Stats from '@pages/HomePage/components/Stats';

/**
 *
 * @returns {*}
 * @constructor
 *
 style={{
        backgroundImage:
          'url("https://source.unsplash.com/collection/4625959/1600x900")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
 */
// const HomePage = ({ getUsers, fetchEvents }) => {
const HomePage = () => {
  return (
    <Page pageName="HomePage">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <Hero />
      <Features />
      <Stats />
    </Page>
  );
};

export default HomePage;
