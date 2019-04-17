import { Router } from 'express';

import { healthCheckHandler } from '../../../handlers/v0/healthcheck';

import {
  allJobsHandler,
  allJobTitlesHandler,
  jobHandler
} from '../../../handlers/v0/jobs';

const v0 = Router();
v0.get('/', healthCheckHandler);
v0.get('/jobs', allJobsHandler);
v0.get('/jobs/titles', allJobTitlesHandler);
v0.get('/jobs/postings/:jobSlug', jobHandler);

export default v0;
