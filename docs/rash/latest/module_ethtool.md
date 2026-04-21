---
title: ethtool
weight: 5530
indent: true
---

{% raw %}
# ethtool

Manage Ethernet device settings using ethtool.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                     | Description                                                                                                |
|-----------|----------|---------|----------------------------|------------------------------------------------------------------------------------------------------------|
| autoneg   |          | boolean |                            | Enable or disable auto-negotiation.                                                                        |
| device    | true     | string  |                            | Network interface name (e.g., eth0, ens33).                                                                |
| duplex    |          | string  | half<br>full               | Duplex mode (half or full).                                                                                |
| offload   |          | object  |                            | Offload feature settings.                                                                                  |
| speed     |          | integer |                            | Link speed in Mbps (10, 100, 1000, 2500, 5000, 10000, 25000, 40000, 50000, 100000).                        |
| state     |          | string  | present<br>absent<br>query | Whether the settings should be present, absent (reset), or query current state. **[default: `"present"`]** |

## Examples

```yaml
- name: Set link speed and duplex
  ethtool:
    device: eth0
    speed: 1000
    duplex: full

- name: Enable auto-negotiation
  ethtool:
    device: eth0
    autoneg: true

- name: Disable auto-negotiation with specific speed
  ethtool:
    device: eth0
    autoneg: false
    speed: 10000
    duplex: full

- name: Configure offload features
  ethtool:
    device: eth0
    offload:
      rx: true
      tx: true
      tso: false
      gso: true

- name: Query current device settings
  ethtool:
    device: eth0
    state: query
  register: eth_settings

- name: Reset device to default settings
  ethtool:
    device: eth0
    state: absent
```

{% endraw %}