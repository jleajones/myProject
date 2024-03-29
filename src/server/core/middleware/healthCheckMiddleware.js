import { Router } from 'express';
import moment from 'moment';

/**
 *
 * @param logger
 * @param version
 * @param name
 * @param startTime
 * @returns {Router}
 */
export default (logger, version, name, startTime) => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.status(200).json({
      status: 'OK',
      version,
      name,
      upTime: moment(startTime).fromNow(true)
    });
  });

  return router;
};
