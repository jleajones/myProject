import uuidv4 from 'uuid/v4';
import { ANALYTICS_TABLE } from '@serverLib/utils/db';
import { UUID_COOKIE_NAME, EVENT_TYPES } from '@serverLib/constants';
import {
  producerCallback,
  buildProducerPayloads
} from '@serverCore/lib/producer';

const KAFKA_TOPIC = 'analytics';

/**
 *
 * @param body
 * @returns {{uuid: *, properties: {}}}
 */
const buildIdentityProperties = body => {
  const { url, properties = {} } = body;
  return {
    url,
    properties: {
      ...properties
    }
  };
};

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
  if (body.type === 'u') {
    return buildIdentityProperties(body);
  }
  return buildInteractionProperties(body);
};

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 */
export const identityHandler = async (req, res, logger, db, producer) => {
  // export const identityHandler = async (req, res, logger, db) => {
  const { eventId } = req.body;
  // if cookie exist
  // send in response
  // else
  // create new one
  // store in DB
  // store in cookie
  // send in response
  const uuid = req.cookies[UUID_COOKIE_NAME] || uuidv4();
  const trackingProperties = buildTrackingProperties(req.body);

  const payload = {
    ...trackingProperties,
    eventType: EVENT_TYPES.u,
    eventId,
    uuid
  };

  res.cookie(UUID_COOKIE_NAME, uuid, { path: '/' });
  logger.info('👤 Setting UUID ==>', { uuid });
  try {
    const query = db(ANALYTICS_TABLE)
      .insert(payload)
      .toString();
    logger.info('💾 Inserting ==>', { query });
    await db(ANALYTICS_TABLE).insert(payload);
    res.status(200).json(uuid);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
  producer.send(
    buildProducerPayloads(KAFKA_TOPIC, JSON.stringify(payload)),
    (err, data) => producerCallback(err, data, KAFKA_TOPIC, logger)
  );
};

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export const analyticsHandler = async (req, res, logger, db, producer) => {
  // export const analyticsHandler = async (req, res, logger, db) => {
  const { type, eventId } = req.body;
  const trackingProperties = buildTrackingProperties(req.body);
  const payload = {
    eventType: EVENT_TYPES[type],
    eventId,
    ...trackingProperties
  };
  logger.info('🚜 Tracking event ==>', {
    ...payload
  });

  producer.send(
    buildProducerPayloads(KAFKA_TOPIC, JSON.stringify(payload)),
    (err, data) => producerCallback(err, data, KAFKA_TOPIC, logger)
  );

  try {
    const query = db(ANALYTICS_TABLE)
      .insert(payload)
      .toString();
    logger.info('💾 Inserting ==>', { query });
    const resp = await db(ANALYTICS_TABLE).insert(payload);
    res.status(200).json(resp);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
};

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export const eventsHandler = async (req, res, logger, db) => {
  try {
    const query = db
      .select()
      .from(ANALYTICS_TABLE)
      .orderBy('timestamp', 'desc')
      .limit(20)
      .toString();
    logger.info('💾 Selecting ==>', { query });
    const resp = await db
      .select()
      .from(ANALYTICS_TABLE)
      .orderBy('timestamp', 'desc')
      .limit(20);
    res.status(200).json(resp);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
};
