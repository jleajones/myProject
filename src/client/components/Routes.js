import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PATHS from '@constants/paths';
import {
  AboutPage,
  DriveWithUs,
  HomePage,
  NotFoundPage
} from '@components/pages';

import Redirect from '@shared/Redirect';

/**
 *
 * @returns {*}
 * @constructor
 */
const Routes = () => (
  <Switch>
    <Route path={PATHS.home.path} exact component={HomePage} />
    <Route path={PATHS.about.path} exact component={AboutPage} />
    <Route path={PATHS.driveWithUs.path} exact component={DriveWithUs} />
    <Route path={PATHS.applyNow.path} exact component={DriveWithUs} />
    <Route path={PATHS.applyNow.path} exact component={DriveWithUs} />
    <Redirect from={['/new-about']} to="/" />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;
