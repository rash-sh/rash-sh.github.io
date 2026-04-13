---
title: netplan
weight: 5770
indent: true
---

{% raw %}
# netplan

Manage network configuration on Ubuntu systems using Netplan.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                     | Description                                                                  |
|-----------|----------|---------|----------------------------|------------------------------------------------------------------------------|
| apply     |          | boolean |                            | Apply configuration immediately using netplan apply. **[default: `true`]**   |
| backup    |          | boolean |                            | Create backup of existing config file.                                       |
| directory |          | string  |                            | Path to the netplan configuration directory. **[default: `"/etc/netplan"`]** |
| filename  |          | string  |                            | Name of the configuration file to manage. **[default: `"01-rash.yaml"`]**    |
| renderer  |          | string  | networkd<br>networkmanager | Backend renderer (networkd or NetworkManager). **[default: `"networkd"`]**   |
| state     |          | string  | present<br>absent          | Whether the configuration should exist or not. **[default: `"present"`]**    |
| version   |          | integer |                            | Netplan version. **[default: `2`]**                                          |

## Examples

```yaml
- name: Configure static IP on main interface
  netplan:
    state: present
    renderer: networkd
    ethernets:
      eth0:
        dhcp4: no
        addresses:
          - 192.168.1.100/24
        routes:
          - to: default
            via: 192.168.1.1
        nameservers:
          addresses:
            - 8.8.8.8
            - 8.8.4.4

- name: Configure Hetzner-style networking (single IP with /32)
  netplan:
    state: present
    renderer: networkd
    ethernets:
      eth0:
        dhcp4: no
        addresses:
          - "{{ net_ip_addr }}/32"
        routes:
          - to: default
            via: "{{ net_gateway }}"
            on-link: true
        nameservers:
          addresses:
            - 213.133.98.98
            - 213.133.99.99

- name: Configure DHCP
  netplan:
    state: present
    renderer: networkd
    ethernets:
      eth0:
        dhcp4: true

- name: Configure bridge for VMs
  netplan:
    state: present
    renderer: networkd
    ethernets:
      eth0:
        dhcp4: false
    bridges:
      br0:
        interfaces:
          - eth0
        dhcp4: true
        parameters:
          stp: false
          forward-delay: 0

- name: Configure bond
  netplan:
    state: present
    renderer: networkd
    ethernets:
      eth0:
        dhcp4: false
      eth1:
        dhcp4: false
    bonds:
      bond0:
        interfaces:
          - eth0
          - eth1
        addresses:
          - 192.168.1.100/24
        parameters:
          mode: 802.3ad
          lacp-rate: fast

- name: Remove netplan configuration
  netplan:
    state: absent
```

{% endraw %}