import { KafkaClient } from 'kafka-node';

export default new KafkaClient({
  kafkaHost: process.env.KAFKA_HOST
});
