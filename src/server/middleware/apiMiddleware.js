import { Router } from 'express';

import eventIdMiddleware from '@serverCore/middleware/eventIdMiddleware';
import v0 from '@api/v0';
// TODO: Improve API Versioning
// NOTE: add new versions here and to versions object
// import v1 from "@api/v1";

const versions = {
  v0
};

export default (logger, version) => {
  const router = Router();
  router.use('*', (req, res, next) =>
    eventIdMiddleware(req, res, next, logger)
  );

  router.use('/', versions[version](logger));

  router.get('*', (req, res) => {
    res.status(404).send('status 404: url not found');
  });

  return router;
};
