# heroku-kafka-util
## About
This is a utility for heroku kafka.
It allows doing the followings.

- View messages in topic
- View Offset
- Set Offset


## Config
You must do the settings before you run this utility.
The config file is `./config/herokukafka.js`.


## View messages
To view the messages posted to a specific Topic/Partition.
Specify the topic name and partition number you want to see in the argument.
The viewing of multiple partitions is not available.

```
node ./src/show_topic.js <TopicName> <PertitionNo>

//example
node ./src/show_topic.js SampleTopic 0
```


## View offset
To view the offset of specific Topic/Partition.
Specify the topic name and partition number you want to see in the argument.
The viewing of multiple partitions is not available.

```
node ./src/show_offset.js <TopicName> <PertitionNo>

//expamle
node ./src/show_topic.js SampleTopic 0
```


## Set offset
To set an offset of specific Topic/Partition.
Specify the topic name, partition number and offset number you want to set in the argument.
The viewing of multiple partitions is not available.

It is better to check the offset before setting an offset.

```
node ./src/set_offset.js <TopicName> <PertitionNo> <OffsetNo>

// example
node ./src/set_offset.js SampleTopic 1 777
```
