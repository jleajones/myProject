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
 * @param db
 * @param producer
 */
export const identityHandler = (req, res, logger, db, producer) => {
  const uuid = req.cookies[UUID_COOKIE_NAME] || uuidv4();
  const payload = {
    eventType: EVENT_TYPES.u,
    eventId: req.body.eventId,
    uuid
  };
  logger.info('👤 Setting UUID ==>', { ...payload });
  producer.send(
    buildProducerPayloads(KAFKA_TOPIC, JSON.stringify(payload)),
    (err, data) => producerCallback(err, data, KAFKA_TOPIC, logger)
  );
  res.cookie(UUID_COOKIE_NAME, uuid, { path: '/' });
  res.status(200).json(uuid);
};

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @param producer
 * @returns {Promise<void>}
 */
export const analyticsHandler = async (req, res, logger, db, producer) => {
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
