---
title: networkd
weight: 5121
indent: true
---

{% raw %}
# networkd

Manage systemd-networkd configuration files (.network, .link, .netdev).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values                                                                                   | Description                                                                                   |
|-------------|----------|---------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| name        | true     | string  |                                                                                          | Name of the configuration file (without extension).                                           |
| type        | true     | string  | network<br>link<br>netdev                                                                | Type of configuration: network, link, or netdev.                                              |
| state       |          | string  | present<br>absent                                                                        | Whether the configuration should exist or not. **[default: `"present"`]**                     |
| interfaces  |          | array   |                                                                                          | Interface names to match.                                                                     |
| addresses   |          | array   |                                                                                          | IP addresses for the interface.                                                               |
| gateway     |          | string  |                                                                                          | Default gateway.                                                                              |
| dns         |          | array   |                                                                                          | DNS servers.                                                                                  |
| dhcp        |          | boolean |                                                                                          | Enable DHCP (ipv4, ipv6, true, false). **[default: `false`]**                                 |
| vlan_id     |          | integer |                                                                                          | VLAN ID (for netdev type vlan).                                                               |
| netdev_kind |          | string  | bridge<br>bond<br>vlan<br>macvlan<br>ipvlan<br>vxlan<br>tun<br>tap<br>wireguard<br>dummy | Netdev kind (bridge, bond, vlan, etc.).                                                       |
| mtu         |          | integer |                                                                                          | MTU for the link.                                                                             |
| backup      |          | boolean |                                                                                          | Create backup of existing config file.                                                        |
| directory   |          | string  |                                                                                          | Path to the systemd-networkd configuration directory. **[default: `"/etc/systemd/network"`]** |
| restart     |          | boolean |                                                                                          | Restart systemd-networkd after changes. **[default: `true`]**                                 |
| config      |          | string  |                                                                                          | Raw INI content to use instead of generated config.                                           |

## Examples

```yaml
- name: Configure static IP on eth0
  networkd:
    name: 10-eth0
    type: network
    state: present
    interfaces:
      - eth0
    addresses:
      - 192.168.1.100/24
    gateway: 192.168.1.1
    dns:
      - 8.8.8.8
      - 8.8.4.4

- name: Configure DHCP on eth0
  networkd:
    name: 20-dhcp
    type: network
    state: present
    interfaces:
      - eth0
    dhcp: true

- name: Create bridge netdev
  networkd:
    name: br0
    type: netdev
    state: present
    netdev_kind: bridge

- name: Create bond netdev
  networkd:
    name: bond0
    type: netdev
    state: present
    netdev_kind: bond

- name: Configure VLAN netdev
  networkd:
    name: vlan10
    type: netdev
    state: present
    netdev_kind: vlan
    vlan_id: 10

- name: Configure link MTU
  networkd:
    name: 10-eth0
    type: link
    state: present
    interfaces:
      - eth0
    mtu: 9000

- name: Remove network configuration
  networkd:
    name: 10-eth0
    type: network
    state: absent
```

{% endraw %}