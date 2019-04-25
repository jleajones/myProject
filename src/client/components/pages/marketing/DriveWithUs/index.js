import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Page from '@components/Page';

const DriveWithUsPage = () => {

  return (
    <Page name="DriveWithUs">
      <Helmet>
        <title>LJ&amp;G Freight, LLC</title>
        <meta name="description" content="Drive with LG&J Freight" />
      </Helmet>
      <div>this is the drive with us page..</div>
    </Page>
  );
};

export default DriveWithUsPage;
