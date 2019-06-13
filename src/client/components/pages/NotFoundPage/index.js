import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    staticContext.statusCode = 404;
  }
  return (
    <Page name='NotFound'>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="This is the About..." />
      </Helmet>
      <div>404 Page</div>
    </Page>
  );
};

export default NotFoundPage;
