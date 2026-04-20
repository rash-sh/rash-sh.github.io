---
title: route
weight: 6250
indent: true
---

{% raw %}
# route

Manage network routing tables using ip route commands.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                               |
|-------------|----------|---------|-------------------|---------------------------------------------------------------------------|
| destination | true     | string  |                   | The destination network address (e.g., "192.168.0.0/24" or "default").    |
| gateway     |          | string  |                   | The gateway IP address for the route.                                     |
| interface   |          | string  |                   | The network interface for the route (e.g., eth0).                         |
| metric      |          | integer |                   | Route metric value (lower is preferred).                                  |
| state       |          | string  | present<br>absent | Whether the route should be present or absent. **[default: `"present"`]** |
| table       |          | string  |                   | Routing table ID or name.                                                 |

## Examples

```yaml
- name: Add default gateway
  route:
    destination: "0.0.0.0/0"
    gateway: "192.168.1.1"

- name: Add static route via specific interface
  route:
    destination: "10.0.0.0/24"
    gateway: "192.168.1.1"
    interface: eth0

- name: Add route with metric
  route:
    destination: "172.16.0.0/16"
    gateway: "10.0.0.1"
    metric: 100

- name: Add route to specific routing table
  route:
    destination: "192.168.2.0/24"
    gateway: "192.168.1.2"
    table: 100

- name: Remove a route
  route:
    destination: "10.0.0.0/24"
    gateway: "192.168.1.1"
    state: absent
```

{% endraw %}