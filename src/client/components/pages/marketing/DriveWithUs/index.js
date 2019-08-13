import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import DriveWithUsForm from './components/DriveWithUsForm';

/**
 *
 * @returns {*}
 * @constructor
 *
 style={{
        backgroundImage:
          'url("https://source.unsplash.com/collection/4625959/1600x900")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
 */
const DriveWithUsPage = () => {
  return (
    <Page pageName="DriveWithUs">
      <Helmet>
        <title>Drive with Us | LJ&amp;G Freight, LLC</title>
        <meta name="description" content="Drive with LG&J Freight" />
      </Helmet>
      <DriveWithUsForm />
    </Page>
  );
};

export default DriveWithUsPage;
