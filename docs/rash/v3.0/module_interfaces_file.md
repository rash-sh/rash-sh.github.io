---
title: interfaces_file
weight: 5082
indent: true
---

{% raw %}
# interfaces_file

Manage network interface configuration in /etc/network/interfaces.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values                               | Description                                                                         |
|-----------------|----------|---------|--------------------------------------|-------------------------------------------------------------------------------------|
| iface           | true     | string  |                                      | The interface name (e.g., eth0, enp0s3, wlan0).                                     |
| family          |          | string  | inet<br>inet6                        | The address family (inet for IPv4, inet6 for IPv6). **[default: `"inet"`]**         |
| method          |          | string  | static<br>dhcp<br>manual<br>loopback | The configuration method (static, dhcp, manual, etc.). **[default: `"static"`]**    |
| address         |          | string  |                                      | The IP address for static configuration. Required if method=static.                 |
| netmask         |          | string  |                                      | The netmask for static configuration. Required if method=static.                    |
| gateway         |          | string  |                                      | The default gateway for static configuration.                                       |
| dns_nameservers |          | array   |                                      | List of DNS nameservers.                                                            |
| dns_search      |          | array   |                                      | List of DNS search domains.                                                         |
| auto            |          | boolean |                                      | Whether the interface should be started at boot. **[default: `true`]**              |
| state           |          | string  | present<br>absent                    | Whether the interface configuration should exist or not. **[default: `"present"`]** |
| path            |          | string  |                                      | Path to the interfaces file. **[default: `"/etc/network/interfaces"`]**             |

## Examples

```yaml
- name: Configure static IP on eth0
  interfaces_file:
    iface: eth0
    address: 192.168.1.100
    netmask: 255.255.255.0
    gateway: 192.168.1.1
    dns_nameservers:
      - 8.8.8.8
      - 8.8.4.4

- name: Configure DHCP interface
  interfaces_file:
    iface: eth1
    method: dhcp

- name: Remove interface configuration
  interfaces_file:
    iface: eth2
    state: absent

- name: Configure interface without auto
  interfaces_file:
    iface: eth3
    method: static
    address: 10.0.0.100
    netmask: 255.255.255.0
    auto: false
```

{% endraw %}