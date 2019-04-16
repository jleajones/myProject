import { Router } from 'express';

import {
  apiCheck,
  allJobsHandler,
  allJobTitlesHandler,
  jobHandler
} from '../../../handlers/v0/apiHandlers';

const v0 = Router();
v0.get('/', apiCheck);
v0.get('/jobs', allJobsHandler);
v0.get('/jobs/titles', allJobTitlesHandler);
v0.get('/jobs/postings/:jobSlug', jobHandler);

export default v0;
