import React from 'react';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
        <title>404: Page Not Found</title>
        <meta name="description" content="This is the About..." />
      </Helmet>

      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h6">Whoops...</Typography>
            <Typography>
              Something went wrong, please check your url and try again!
            </Typography>
          </Grid>
        </Grid>
      </Container>
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
