---
title: nmcli
weight: 5900
indent: true
---

{% raw %}
# nmcli

Manage NetworkManager connections using nmcli.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values                                                                                         | Description |
|-------------|----------|---------|------------------------------------------------------------------------------------------------|-------------|
| autoconnect |          | boolean |                                                                                                |             |
| conn_name   | true     | string  |                                                                                                |             |
| dns4        |          | array   |                                                                                                |             |
| gw4         |          | string  |                                                                                                |             |
| ifname      |          | string  |                                                                                                |             |
| ip4         |          | string  |                                                                                                |             |
| ssid        |          | string  |                                                                                                |             |
| state       |          | string  | present<br>absent<br>up<br>down                                                                |             |
| type        |          | string  | ethernet<br>wifi<br>bridge<br>bond<br>team<br>vlan<br>vxlan<br>dummy<br>generic<br>tun<br>veth |             |
| wifi_sec    |          | object  |                                                                                                |             |

## Example

```yaml
- name: Create ethernet connection with static IP
  nmcli:
    conn_name: eth0-static
    ifname: eth0
    type: ethernet
    ip4: 192.168.1.100/24
    gw4: 192.168.1.1
    dns4:
      - 8.8.8.8
      - 8.8.4.4
    state: present

- name: Bring up a connection
  nmcli:
    conn_name: eth0-static
    state: up

- name: Bring down a connection
  nmcli:
    conn_name: eth0-static
    state: down

- name: Delete a connection
  nmcli:
    conn_name: eth0-static
    state: absent

- name: Create WiFi connection
  nmcli:
    conn_name: mywifi
    type: wifi
    ifname: wlan0
    ssid: MyNetwork
    wifi_sec:
      key-mgmt: wpa-psk
      psk: mypassword
    state: present

- name: Create a bridge connection
  nmcli:
    conn_name: br0
    type: bridge
    ifname: br0
    ip4: 192.168.1.10/24
    state: present
```

{% endraw %}