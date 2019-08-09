import { Router } from 'express';
import listEndpoints from 'express-list-endpoints';

import producer from '@serverCore/lib/producer';
import buildConsumer from '@serverCore/lib/consumer';

import healthCheckHandler from './handlers/healthCheck';
import { analyticsHandler, identityHandler } from './handlers/analytics';

// import { getJobs, getJobTitles, getJob } from './handlers/jobs';
import {
  createUsers,
  readUsers,
  updateUsers,
  deleteUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser
} from './handlers/users';

/**
 *
 * @param logger
 * @param db
 * @returns {Router}
 */
export default (logger, db) => {
  const kafkaTopics = ['analytics'];
  const consumer = buildConsumer(kafkaTopics);

  consumer.on('message', async message => {
    logger.info('kafka::consumer-> ', { message: message.value });
  });

  consumer.on('error', err => {
    logger.info('kafka::consumer:error-> ', err);
  });

  const router = Router();
  /* ******************HEALTHCHECK********************** */
  router.get('/', (req, res) =>
    healthCheckHandler(req, res, listEndpoints(router))
  );
  /* ******************ANALYTICS********************** */
  router.get('/analytics', (req, res) =>
    identityHandler(req, res, logger, db, producer)
  );

  router.post('/analytics', (req, res) =>
    analyticsHandler(req, res, logger, db, producer)
  );
  /* ******************JOBS********************** */
  // router.get('/jobs', (req, res) => getJobs(req, res, logger, db));
  // router.get('/jobs/titles', (req, res) => getJobTitles(req, res, logger, db));
  // router.get('/jobs/postings/:jobSlug', (req, res) =>
  //   getJob(req, res, logger, db)
  // );
  /* ******************USERS********************** */
  router.post('/users', (req, res) => createUsers(req, res, logger, db));
  router.get('/users', (req, res) => readUsers(req, res, logger, db));
  router.put('/users', (req, res) => updateUsers(req, res, logger, db));
  router.delete('/users', (req, res) => deleteUsers(req, res, logger, db));
  /* ******************USER********************** */
  router.get('/users/:uid', (req, res) => createUser(req, res, logger, db));
  router.post('/users/:uid', (req, res) => readUser(req, res, logger, db));
  router.post('/users/:uid', (req, res) => updateUser(req, res, logger, db));
  router.post('/users/:uid', (req, res) => deleteUser(req, res, logger, db));
  /* ******************Catch 404********************** */
  router.get('*', (req, res) => {
    res.status(404).send('status 404: url not found');
  });

  return router;
};
