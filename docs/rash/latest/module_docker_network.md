---
title: docker_network
weight: 5048
indent: true
---

{% raw %}
# docker_network

Manage Docker networks for container orchestration.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values                               | Description                                      |
|-------------|----------|---------|--------------------------------------|--------------------------------------------------|
| attachable  |          | boolean |                                      | Allow manual container attachment to network.    |
| driver      |          | string  | bridge<br>overlay<br>macvlan<br>null | Network driver (bridge, overlay, macvlan, null). |
| enable_ipv6 |          | boolean |                                      | Enable IPv6 networking.                          |
| force       |          | boolean |                                      | Force removal of the network.                    |
| gateway     |          | string  |                                      | IPv4 gateway.                                    |
| internal    |          | boolean |                                      | Restrict external access to the network.         |
| ip_range    |          | string  |                                      | IPv4 address range.                              |
| ipam_config |          | array   |                                      | IPAM configuration.                              |
| name        | true     | string  |                                      | Network name (required).                         |
| scope       |          | string  | local<br>swarm                       | Network scope (local, swarm).                    |
| state       |          | string  | present<br>absent                    | Desired state of the network.                    |
| subnet      |          | string  |                                      | IPv4 subnet CIDR.                                |

## Example

```yaml
- name: Create a bridge network
  docker_network:
    name: mynetwork
    state: present

- name: Create a network with custom subnet
  docker_network:
    name: app_network
    driver: bridge
    subnet: "172.20.0.0/16"
    gateway: "172.20.0.1"
    state: present

- name: Create an overlay network for swarm
  docker_network:
    name: swarm_network
    driver: overlay
    scope: swarm
    attachable: true
    state: present

- name: Create an isolated internal network
  docker_network:
    name: internal_network
    driver: bridge
    internal: true
    state: present

- name: Create a network with IP range
  docker_network:
    name: limited_network
    subnet: "172.30.0.0/16"
    ip_range: "172.30.0.0/24"
    state: present

- name: Create an IPv6 enabled network
  docker_network:
    name: ipv6_network
    enable_ipv6: true
    subnet: "fd00:dead:beef::/48"
    state: present

- name: Remove a network
  docker_network:
    name: old_network
    state: absent
```

{% endraw %}