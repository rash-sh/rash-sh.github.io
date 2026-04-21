---
title: wireguard
weight: 6880
indent: true
---

{% raw %}
# wireguard

Manage WireGuard VPN interfaces and peers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values                          | Description |
|-------------|----------|---------|---------------------------------|-------------|
| address     |          | string  |                                 |             |
| dns         |          | array   |                                 |             |
| interface   | true     | string  |                                 |             |
| listen_port |          | integer |                                 |             |
| mtu         |          | integer |                                 |             |
| peers       |          | array   |                                 |             |
| private_key |          | string  |                                 |             |
| save_config |          | boolean |                                 |             |
| state       |          | string  | present<br>absent<br>up<br>down |             |

## Examples

```yaml
- name: Create WireGuard interface with a peer
  wireguard:
    interface: wg0
    state: present
    private_key: "PRIVATE_KEY_HERE"
    listen_port: 51820
    peers:
      - public_key: "PEER_PUBLIC_KEY"
        endpoint: "192.168.1.100:51820"
        allowed_ips:
          - "10.0.0.2/32"
        persistent_keepalive: 25

- name: Configure interface with DNS and MTU
  wireguard:
    interface: wg0
    state: present
    private_key: "PRIVATE_KEY_HERE"
    address: "10.0.0.1/24"
    dns:
      - "1.1.1.1"
      - "8.8.8.8"
    mtu: 1280

- name: Start WireGuard interface
  wireguard:
    interface: wg0
    state: up

- name: Stop WireGuard interface
  wireguard:
    interface: wg0
    state: down

- name: Remove WireGuard interface
  wireguard:
    interface: wg0
    state: absent
```

{% endraw %}