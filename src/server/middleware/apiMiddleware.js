import { Router } from 'express';

import eventIdMiddleware from '@serverCore/middleware/eventIdMiddleware';
import v0 from '@api/v0';
// TODO: Improve API Versioning
// NOTE: add new versions here and to versions object
// import v1 from "@api/v1";

const versions = {
  v0
};

/**
 *
 * @param logger
 * @param version
 * @param db
 * @returns {Router}
 */
export default (logger, version, db) => {
  const router = Router();
  router.use('*', (req, res, next) =>
    eventIdMiddleware(req, res, next, logger)
  );

  router.use('/', versions[version](logger, db));

  router.get('*', (req, res) => {
    res.status(404).send('status 404: url not found');
  });

  return router;
};
