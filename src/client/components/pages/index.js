import React from 'react';
import loadable from '@loadable/component';

import Loader from '@shared/Loader';

export const AboutPage = loadable(() => import('@pages/AboutPage'), {
  fallback: <Loader />
});

export const DashboardPage = loadable(() => import('@pages/DashboardPage'), {
  fallback: <Loader />
});

export const DriveWithUs = loadable(
  () => import('@pages/marketing/DriveWithUs'),
  {
    fallback: <Loader />
  }
);

export const HomePage = loadable(() => import('@pages/HomePage'), {
  fallback: <Loader />
});

export const NotFoundPage = loadable(() => import('@pages/NotFoundPage'), {
  fallback: <Loader />
});
