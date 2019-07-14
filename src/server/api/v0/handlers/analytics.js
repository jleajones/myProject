import uuidv4 from 'uuid/v4';
import { ANALYTICS_TABLE } from '@serverLib/utils/db';
import { UUID_COOKIE_NAME } from '@serverLib/constants';

const buildPageview = body => {
  const { uuid, pageName, url, properties = {} } = body;
  return {
    uuid,
    pageName,
    url,
    properties: {
      ...properties
    }
  };
};

const buildInteraction = body => {
  const { uuid, eventName, label, category, url, properties = {} } = body;
  return {
    uuid,
    eventName,
    label,
    category,
    url,
    properties: {
      ...properties
    }
  };
};

const buildTrackingProperties = body => {
  if (body.type === 'p') {
    return buildPageview(body);
  }
  return buildInteraction(body);
};

export const identityHandler = (req, res, logger) => {
  const uuid = req.cookies[UUID_COOKIE_NAME] || uuidv4();
  logger.info('UUID', { uuid });
  res.cookie(UUID_COOKIE_NAME, uuid, { path: '/' });
  res.status(200).json(uuid);
};

export const analyticsHandler = async (req, res, logger, db) => {
  const { type, eventId } = req.body;
  const trackingProperties = buildTrackingProperties(req.body);
  logger.info('🚜 Track event', {
    eventType: type,
    eventId,
    ...trackingProperties
  });

  try {
    const resp = await db(ANALYTICS_TABLE).insert({
      eventType: type,
      eventId: req.body.eventId,
      ...trackingProperties
    });

    res.status(200).json(resp);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
};
