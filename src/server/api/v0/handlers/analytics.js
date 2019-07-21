import uuidv4 from 'uuid/v4';
import { ANALYTICS_TABLE } from '@serverLib/utils/db';
import { UUID_COOKIE_NAME, EVENT_TYPES } from '@serverLib/constants';

/**
 *
 * @param body
 * @returns {{uuid: *, pageName: *, url: *, properties: {}}}
 */
const buildPageviewProperties = body => {
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

/**
 *
 * @param body
 * @returns {{eventName: *, label: *, category: *, uuid: *, url: *, properties: {}}}
 */
const buildInteractionProperties = body => {
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

/**
 *
 * @param body
 * @returns {{eventName: *, label: *, category: *, uuid: *, url: *, properties: {}}|{uuid: *, pageName: *, url: *, properties: {}}}
 */
const buildTrackingProperties = body => {
  if (body.type === 'p') {
    return buildPageviewProperties(body);
  }
  return buildInteractionProperties(body);
};

/**
 *
 * @param req
 * @param res
 * @param logger
 */
export const identityHandler = (req, res, logger) => {
  const uuid = req.cookies[UUID_COOKIE_NAME] || uuidv4();
  logger.info('👤 UUID', { uuid });
  res.cookie(UUID_COOKIE_NAME, uuid, { path: '/' });
  res.status(200).json(uuid);
};

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export const analyticsHandler = async (req, res, logger, db) => {
  const { type, eventId } = req.body;
  const trackingProperties = buildTrackingProperties(req.body);
  logger.info('🚜 Track event', {
    eventType: EVENT_TYPES[type],
    eventId,
    ...trackingProperties
  });

  try {
    const payload = {
      eventType: EVENT_TYPES[type],
      eventId: req.body.eventId,
      ...trackingProperties
    };
    const query = db(ANALYTICS_TABLE)
      .insert(payload)
      .toString();
    logger.info('💾 DB Insert: ', { query });
    const resp = await db(ANALYTICS_TABLE).insert(payload);
    res.status(200).json(resp);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
};
