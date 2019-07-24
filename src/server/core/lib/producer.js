import { Producer } from 'kafka-node';
import Client from './client';

export const buildProducerPayloads = (topic, messages) => [
  {
    topic,
    messages
  }
];

export const producerCallback = (err, data, topic, logger) => {
  if (err) {
    logger.info(`[kafka-producer -> ${topic}]: broker update failed`, { data });
  } else {
    logger.info(`[kafka-producer -> ${topic}]: broker update success`, {
      data
    });
  }
};

export default new Producer(Client);
