---
title: wakeonlan
weight: 5194
indent: true
---

{% raw %}
# wakeonlan

Send Wake-on-LAN magic packets to wake up network devices.

This module sends Wake-on-LAN magic packets to wake up sleeping devices.
Useful for IoT device management, remote server wake-up, scheduled wake-up
automation, and energy-saving workflows.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                  |
|-----------|----------|---------|--------|----------------------------------------------------------------------------------------------|
| broadcast |          | string  |        | Broadcast address to send the magic packet to. **[default: `255.255.255.255`]**              |
| mac       | true     | string  |        | MAC address of target device (required). Format: XX:XX:XX:XX:XX:XX (e.g., 00:11:22:33:44:55) |
| port      |          | integer |        | UDP port to send the magic packet to. **[default: `9`]**                                     |

## Example

```yaml
- name: Wake up server
  wakeonlan:
    mac: 00:11:22:33:44:55

- name: Wake up device with custom broadcast
  wakeonlan:
    mac: 00:11:22:33:44:55
    broadcast: 192.168.1.255
    port: 7
```

{% endraw %}