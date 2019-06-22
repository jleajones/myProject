export const trackEventHandler = (req, res, logger) => {
  logger.info('🚜 Track event', { eventName: req.body.eventName, eventId: req.body.eventId });
  res.status(200).json({
    type: 'event',
    properties: {
      ...req.body.properties
    },
    eventName: req.body.eventName,
    timeStamp: req.body.timeStamp
  });
};

export const pageViewHandler = (req, res, logger) => {
  logger.info('🔭 Page view', { pageName: req.body.pageName, eventId: req.body.eventId });
  res.status(200).json({
    type: 'pageView',
    properties: {
      ...req.body.properties
    },
    pageName: req.body.pageName,
    screenX: req.body.screenX,
    screenY: req.body.screenY,
    timeStamp: req.body.timeStamp
  });
};
