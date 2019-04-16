import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    staticContext.statusCode = 404;
  }
  return (
      <div>
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="This is the About..." />
        </Helmet>
        <div>404 Page</div>
      </div>
  );
};

export default NotFoundPage;
