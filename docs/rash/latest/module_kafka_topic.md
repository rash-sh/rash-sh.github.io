---
title: kafka_topic
weight: 5820
indent: true
---

{% raw %}
# kafka_topic

Manage Kafka topics.

Create and delete Kafka topics with configurable partitions, replication
factor, and topic-level configuration. Useful for streaming infrastructure
management, event-driven architectures, and data pipeline automation.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values            | Description |
|--------------------|----------|---------|-------------------|-------------|
| bootstrap_servers  |          | string  |                   |             |
| config             |          | object  |                   |             |
| name               | true     | string  |                   |             |
| partitions         |          | integer |                   |             |
| replication_factor |          | integer |                   |             |
| state              |          | string  | present<br>absent |             |

## Examples

```yaml
- name: Create a topic
  kafka_topic:
    name: events
    partitions: 3
    replication_factor: 2
    config:
      retention.ms: "604800000"
    state: present

- name: Delete a topic
  kafka_topic:
    name: old_topic
    state: absent

- name: Create topic with custom bootstrap servers
  kafka_topic:
    name: my-topic
    partitions: 6
    replication_factor: 3
    bootstrap_servers: kafka1:9092,kafka2:9092
    state: present
```

{% endraw %}