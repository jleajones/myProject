import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import PropTypes from 'prop-types';

/**
 *
 * @param staticContext
 * @returns {*}
 * @constructor
 */
const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    staticContext.statusCode = 404;
  }
  return (
    <Page pageName="NotFound">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="This is the About..." />
      </Helmet>
      <div>404 Page</div>
    </Page>
  );
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape({
    statusCode: PropTypes.number
  })
};

export default NotFoundPage;
