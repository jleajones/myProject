import { Router } from 'express';
import listEndpoints from 'express-list-endpoints';

import healthCheckHandler from './handlers/healthCheck';
import { trackEventHandler, pageViewHandler } from './handlers/analytics';
import { getJobs, getJobTitles, getJob } from './handlers/jobs';
import { getUsers, getUser, createUser } from './handlers/users';

export default (logger, db) => {
  const router = Router();
  /* ******************HEALTHCHECK********************** */
  router.get('/', (req, res) =>
    healthCheckHandler(req, res, listEndpoints(router))
  );

  /* ******************ANALYTICS********************** */
  router.post('/analytics/trackEvent', (req, res) =>
    trackEventHandler(req, res, logger, db)
  );

  router.post('/analytics/pageView', (req, res) =>
    pageViewHandler(req, res, logger, db)
  );

  /* ******************JOBS********************** */
  router.get('/jobs', (req, res) => getJobs(req, res, logger, db));
  router.get('/jobs/titles', (req, res) => getJobTitles(req, res, logger, db));
  router.get('/jobs/postings/:jobSlug', (req, res) =>
    getJob(req, res, logger, db)
  );

  /* ******************USERS********************** */
  router.get('/users', (req, res) => getUsers(req, res, logger, db));
  router.get('/users/:uid', (req, res) => getUser(req, res, logger, db));
  router.post('/users', (req, res) => createUser(req, res, logger, db));

  return router;
};
