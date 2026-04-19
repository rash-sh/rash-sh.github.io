---
title: ipaddr
weight: 5580
indent: true
---

{% raw %}
# ipaddr

Manage IP addresses on network interfaces.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                                                                   |
|-----------|----------|--------|-------------------|---------------------------------------------------------------------------------------------------------------|
| address   | true     | string |                   | IP address with CIDR (e.g., 192.168.1.10/24).                                                                 |
| family    |          | string | ipv4<br>ipv6      | IP address family (ipv4 or ipv6). Auto-detected from address format if not specified. **[default: `"ipv4"`]** |
| interface | true     | string |                   | Network interface name.                                                                                       |
| state     |          | string | present<br>absent | Whether the address should be present or absent. **[default: `"present"`]**                                   |

## Examples

```yaml
- name: Add IP address to interface
  ipaddr:
    interface: eth0
    address: 192.168.1.10/24

- name: Add IPv6 address
  ipaddr:
    interface: eth0
    address: 2001:db8::1/64
    family: ipv6

- name: Remove IP address from interface
  ipaddr:
    interface: eth0
    address: 192.168.1.10/24
    state: absent

- name: Add secondary IP address
  ipaddr:
    interface: eth0
    address: 192.168.2.10/24
```

{% endraw %}