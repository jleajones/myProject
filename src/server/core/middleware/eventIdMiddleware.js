import uuidv4 from 'uuid/v4';

export const eventIdMiddleware = (req, res, next, logger) => {
  req.body.eventId = uuidv4();
  const data = {url: req.originalUrl, ts: Date.now(), date : new Date().toISOString()};
  Object.assign(data, req.body);
  next();
}