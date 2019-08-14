import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import Hero from '@pages/HomePage/components/Hero';

/**
 *
 * @param users
 * @param eventData
 * @param {Function} getUsers
 * @param {Function} fetchEvents
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
const DashboardPage = ({ events, fetchEvents }) => {
  return (
    <Page
      pageName="Dashboard"
      fetchData={async () => {
        await fetchEvents();
      }}
    >
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="This is the dashboard..." />
      </Helmet>
      <Hero data={events} />
    </Page>
  );
};

DashboardPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchEvents: PropTypes.func.isRequired
};

// export default HomePage;
export default DashboardPage;
