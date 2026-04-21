---
title: conntrack
weight: 5260
indent: true
---

{% raw %}
# conntrack

Manage Linux connection tracking table entries. Essential for container
networking, firewall troubleshooting, and IoT network management.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values         | Description                                                                   |
|-------------|----------|---------|----------------|-------------------------------------------------------------------------------|
| conn_state  |          | string  |                | Connection state to filter (e.g., ESTABLISHED, TIME_WAIT, CLOSE, SYN_SENT).   |
| destination |          | string  |                | Destination IP address or CIDR to filter connections.                         |
| flush       |          | boolean |                | Flush all connection tracking entries. **[default: `false`]**                 |
| port        |          | integer |                | Port number to filter (used with protocol).                                   |
| protocol    |          | string  |                | Network protocol to filter (tcp, udp, icmp, sctp, dccp, gre).                 |
| source      |          | string  |                | Source IP address or CIDR to filter connections.                              |
| source_port |          | integer |                | Source port number to filter.                                                 |
| state       |          | string  | absent<br>list | Whether to list entries or delete matching entries. **[default: `"absent"`]** |

## Examples

```yaml
- name: Flush all connection tracking entries
  conntrack:
    flush: true

- name: Drop connections from specific IP
  conntrack:
    source: 10.0.0.1
    state: absent

- name: Drop connections to specific IP and port
  conntrack:
    destination: 192.168.1.100
    protocol: tcp
    port: 443
    state: absent

- name: Drop UDP connections from a subnet
  conntrack:
    source: 10.0.0.0/24
    protocol: udp
    state: absent

- name: List connections from specific IP
  conntrack:
    source: 10.0.0.1
    state: list

- name: Drop connections from source to destination
  conntrack:
    source: 10.0.0.1
    destination: 192.168.1.100
    state: absent
```

{% endraw %}