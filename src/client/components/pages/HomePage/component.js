import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import Hero from '@pages/HomePage/components/Hero';

/**
 *
 * @param users
 * @param {Function} getUsers
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
const HomePage = ({ users, getUsers }) => {
  return (
    <Page pageName="HomePage" fetchData={getUsers}>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <Hero users={users} />
    </Page>
  );
};

HomePage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUsers: PropTypes.func.isRequired
};

// export default HomePage;
export default HomePage;
