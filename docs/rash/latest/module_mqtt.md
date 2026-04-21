---
title: mqtt
weight: 6080
indent: true
---

{% raw %}
# mqtt

MQTT publish/subscribe messaging for IoT communication.

Publish and subscribe to MQTT topics with support for Quality of Service
levels, message retention, and authentication. Essential for IoT device
scripting, sensor data publishing, home automation, and edge computing.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values | Description                                                                       |
|-------------------|----------|---------|--------|-----------------------------------------------------------------------------------|
| broker            | true     | string  |        | MQTT broker hostname or IP address.                                               |
| client_id         |          | string  |        | MQTT client identifier. **[default: `rash-<uuid>`]**                              |
| max_messages      |          | integer |        | Maximum number of messages to collect when subscribing. **[default: `1`]**        |
| password          |          | string  |        | Password for MQTT authentication.                                                 |
| payload           |          | string  |        | Message content to publish (required for state=publish).                          |
| port              |          | integer |        | MQTT broker port. **[default: `1883`]**                                           |
| qos               |          | integer |        | Quality of Service level (0, 1, or 2). **[default: `0`]**                         |
| retain            |          | boolean |        | Whether to retain the message on the broker. **[default: `false`]**               |
| state             |          |         |        | Operation state: publish or subscribe. **[default: `publish`]**                   |
| subscribe_timeout |          | integer |        | Timeout in seconds to wait for messages when subscribing. **[default: `5`]**      |
| tls               |          | boolean |        | Enable TLS/SSL connection (use port 8883 for secure MQTT). **[default: `false`]** |
| topic             | true     | string  |        | MQTT topic to publish to or subscribe from.                                       |
| username          |          | string  |        | Username for MQTT authentication.                                                 |

## Examples

```yaml
- name: Publish sensor reading
  mqtt:
    topic: sensors/temperature
    payload: "22.5"
    broker: localhost

- name: Publish with QoS and retain
  mqtt:
    topic: devices/status
    payload: '{"online": true}'
    broker: mqtt.example.com
    port: 1883
    qos: 1
    retain: true

- name: Publish with authentication
  mqtt:
    topic: home/living_room/thermostat
    payload: "21.0"
    broker: mqtt.example.com
    username: "{{ mqtt_user }}"
    password: "{{ mqtt_pass }}"
    client_id: rash-thermostat

- name: Subscribe to a topic
  mqtt:
    topic: sensors/#
    broker: localhost
    state: subscribe
  register: mqtt_messages
```

{% endraw %}