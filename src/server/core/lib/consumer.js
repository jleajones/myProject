import { Consumer } from 'kafka-node';
import Client from './client';

const options = {
  autoCommit: false,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024
};

export default kafkaTopics => {
  const topics = kafkaTopics.map(topic => ({
    topic,
    partition: 0
  }));
  return new Consumer(Client, topics, options);
};
