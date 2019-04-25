import loadable from "@loadable/component";
import React from "react";

import Loader from '@components/Loader'

export const HomePage = loadable(() => import('./HomePage'), {
  fallback: <Loader />
});

export const AboutPage = loadable(() => import('./AboutPage'), {
  fallback: <Loader />
});

export const DriveWithUs = loadable(() => import('./marketing/DriveWithUs'), {
  fallback: <Loader />
});

export const NotFoundPage = loadable(() => import('./NotFoundPage'), {
  fallback: <Loader />
});