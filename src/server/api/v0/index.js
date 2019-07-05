import { Router } from 'express';
import listEndpoints from 'express-list-endpoints';

import healthCheckHandler from '@handlers/v0/healthCheck';

import {
  allJobsHandler,
  allJobTitlesHandler,
  jobHandler
} from '@handlers/v0/jobs';

import { trackEventHandler, pageViewHandler } from '@handlers/v0/analytics';

export default logger => {
  const router = Router();
  router.get('/', (req, res) =>
    healthCheckHandler(req, res, listEndpoints(router))
  );
  router.post('/analytics/trackEvent', (req, res) =>
    trackEventHandler(req, res, logger)
  );
  router.post('/analytics/pageView', (req, res) =>
    pageViewHandler(req, res, logger)
  );
  router.get('/jobs', allJobsHandler);
  router.get('/jobs/titles', allJobTitlesHandler);
  router.get('/jobs/postings/:jobSlug', jobHandler);

  return router;
};
