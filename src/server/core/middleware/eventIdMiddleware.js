import uuidv4 from 'uuid/v4';

/**
 *
 * @param req
 * @param res
 * @param next
 */
export default (req, res, next) => {
  req.body.eventId = uuidv4();
  const data = {
    url: req.originalUrl,
    ts: Date.now(),
    date: new Date().toISOString()
  };
  Object.assign(data, req.body);
  next();
};
