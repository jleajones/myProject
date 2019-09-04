import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '@shared/Page';
import Dashboard from './components/Dashboard';

/**
 *
 * @param events
 * @param {Function} fetchEvents
 * @returns {*}
 * @constructor
 *
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
      <Dashboard data={events} />
    </Page>
  );
};

DashboardPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchEvents: PropTypes.func.isRequired
};

export default DashboardPage;
