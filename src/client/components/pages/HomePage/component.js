import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { frontloadConnect } from 'react-frontload';

import Typography from '@material-ui/core/Typography';

import Page from '@shared/Page';

const fetchData = async ({ getUsers }) => {
  await getUsers();
};

/**
 *
 * @param users
 * @returns {*}
 * @constructor
 */
const HomePage = ({ users }) => {
  console.log(users);
  return (
    <Page
      pageName="HomePage"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/collection/4625959/1600x900")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <Typography>This is the home page...</Typography>
    </Page>
  );
};

HomePage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

// export default HomePage;
export default frontloadConnect(fetchData)(HomePage);
