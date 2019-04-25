import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import styles from './App.css';

import PATHS from '@constants/paths'
import Header from '@components/Header';
import Redirect from '@components/Redirect';
import { HomePage, AboutPage, DriveWithUs, NotFoundPage } from './pages';

const App = () => (
  <div className={styles.appRoot}>
    <Helmet>
      <title>LJ&ampG Freight, LLC</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Header />
    <Switch>
      <Route path={PATHS.home.path} exact component={HomePage} />
      <Route path={PATHS.about.path} exact component={AboutPage} />
      <Route path={PATHS.driveWithUs.path} exact component={DriveWithUs} />
      <Route path={PATHS.applyNow.path} exact component={DriveWithUs} />
      <Redirect from="/new-about" to="/" />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;