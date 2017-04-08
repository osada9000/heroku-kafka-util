'use strict';

const kafka = require('no-kafka');
const config = require('../config/herokukafka.js');

const GROUP_ID = 'show_topic';
const CLIENT_ID = 'show_topic';
const TOPIC = process.argv[2];
const PARTITION = process.argv[3];
const IDLE_TIMEOUT = 1000;

const consumer = new kafka.SimpleConsumer({
  idleTimeout: IDLE_TIMEOUT,
  groupId: GROUP_ID,
  clientId: CLIENT_ID,
  connectionString: config.kafka_url.replace(/\+ssl/g, ''),
  ssl: {
    certStr: config.cert_str,
    keyStr: config.certkey_str
  }
});

if (process.argv.length !== 4) {
  console.error("Invalid args length.");
  return;
}

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((msg, index) => {
    let printstr = `[index: ${index}, topic: ${topic}, partition: ${partition}, offset: ${msg.offset}] ${(msg.message.value === null) ? null : msg.message.value.toString('utf8')}`;
    console.log(printstr);
  });
};

return consumer.init()
  .then(() => {
    return consumer.subscribe(TOPIC, PARTITION, dataHandler);
    //return consumer.subscribe(TOPIC, PARTITION, {offset: 10000}, dataHandler);
    exit();
  })
  .catch((e) => {
    console.error("Error: ", e);
    exit();
  });

function exit() {
  consumer.end();
  process.exit();
}
