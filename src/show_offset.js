'use strict';

const kafka = require('no-kafka');
const config = require('../config/herokukafka.js');

const GROUP_ID = 'show_offset';
const CLIENT_ID = 'show_offset';
const FROMTOPIC = process.argv[2];
const PARTITION = process.argv[3];
const IDLE_TIMEOUT = 1000;

if (process.argv.length !== 4) {
  console.error("Invalid args length.");
  return;
}

let consumer = new kafka.SimpleConsumer({
  idleTimeout: IDLE_TIMEOUT,
  groupId: GROUP_ID,
  clientId: CLIENT_ID,
  connectionString: config.kafka_url.replace(/\+ssl/g, ''),
  ssl: {
    certStr: config.cert_str,
    keyStr: config.certkey_str
  }
});

return consumer.init()
  .then(() => {
    const topic_fetchoffset = {
      topic: FROMTOPIC,
      partition: PARTITION
    };
    consumer.fetchOffset(topic_fetchoffset)
      .then((res) => {
        console.log(res);
        exit();
      })
      .catch((e) => {
        console.error("Error: ", e);
        exit();
      });
  })
  .catch((e) => {
    console.error("Error: ", e);
    exit();
  });

function exit() {
  consumer.end();
  process.exit();
}
