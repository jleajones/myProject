import loadable from "@loadable/component";
import React from "react";

export const HomePage = loadable(() => import('./HomePage'), {
  fallback: <div>Loading...</div>
});

export const AboutPage = loadable(() => import('./AboutPage'), {
  fallback: <div>Loading...</div>
});

export const NotFoundPage = loadable(() => import('./NotFoundPage'), {
  fallback: <div>Loading...</div>
});