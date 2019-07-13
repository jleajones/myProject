export const someOtherhandler = () => null;

const buildPageview = body => {
  const { pageName, screenX, screenY, properties = {} } = body;
  return {
    pageName,
    screenX,
    screenY,
    properties: {
      ...properties
    }
  };
};

const buildInteraction = body => {
  const { eventName, label, category, url, properties = {} } = body;
  return {
    eventName,
    label,
    category,
    url,
    properties: {
      ...properties
    }
  };
};

export const analyticsHandler = (req, res, logger /* ,db */) => {
  const { type } = req.body;
  let trackingProperties;

  if (type === 'p') {
    trackingProperties = buildPageview(req.body);
  } else if (type === 'i') {
    trackingProperties = buildInteraction(req.body);
  }
  logger.info('🚜 Track event', {
    eventType: type,
    eventId: req.body.eventId,
    ...trackingProperties
  });
  res.status(200).json('OK');
};
