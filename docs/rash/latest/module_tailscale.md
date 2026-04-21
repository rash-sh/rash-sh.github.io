---
title: tailscale
weight: 6640
indent: true
---

{% raw %}
# tailscale

Manage Tailscale mesh VPN networking.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type   | Values               | Description                                                |
|------------------|----------|--------|----------------------|------------------------------------------------------------|
| advertise_routes |          | array  |                      | Subnet routes to advertise (e.g. ["10.0.0.0/24"]).         |
| auth_key         |          | string |                      | Authentication key for login. Required when state is 'up'. |
| exit_node        |          | string |                      | IP address of the exit node to use.                        |
| hostname         |          | string |                      | Custom hostname for this node.                             |
| state            |          | string | up<br>down<br>logout | Desired state of the Tailscale connection.                 |

## Examples

```yaml
- name: Connect to Tailscale network
  tailscale:
    state: up
    auth_key: "{{ tailscale_auth_key }}"

- name: Connect with custom hostname and advertise routes
  tailscale:
    state: up
    auth_key: "{{ tailscale_auth_key }}"
    hostname: my-device
    advertise_routes:
      - 10.0.0.0/24
      - 192.168.1.0/24

- name: Use an exit node
  tailscale:
    state: up
    exit_node: 100.64.0.1

- name: Disconnect from Tailscale
  tailscale:
    state: down

- name: Logout from Tailscale
  tailscale:
    state: logout
```

{% endraw %}