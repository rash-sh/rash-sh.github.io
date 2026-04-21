---
title: ufw
weight: 6790
indent: true
---

{% raw %}
# ufw

Manage Ubuntu Uncomplicated Firewall (UFW).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                                     | Description                                                                      |
|------------|----------|---------|--------------------------------------------|----------------------------------------------------------------------------------|
| comment    |          | string  |                                            | Comment for the rule.                                                            |
| direction  |          | string  | in<br>out                                  | The direction for the policy (incoming or outgoing). **[default: `"incoming"`]** |
| from_ip    |          | string  |                                            | Source IP address or CIDR.                                                       |
| interface  |          | string  |                                            | Network interface for the rule.                                                  |
| logging    |          | string  | off<br>on<br>low<br>medium<br>high<br>full | Logging level: off, on, low, medium, high, full.                                 |
| name       |          | string  |                                            | Service name to allow/deny (e.g., ssh, http).                                    |
| policy     |          | string  | allow<br>deny<br>reject                    | Set the default policy for incoming or outgoing traffic.                         |
| port       |          | string  |                                            | Port number or service name.                                                     |
| proto      |          | string  | tcp<br>udp                                 | Protocol (tcp or udp).                                                           |
| route      |          | boolean |                                            | Route traffic through the firewall. **[default: `false`]**                       |
| rule       |          | string  | allow<br>deny<br>reject<br>limit           | The rule action (allow, deny, reject, limit).                                    |
| rule_state |          | string  | present<br>absent                          | Whether the rule should be present or absent. **[default: `"present"`]**         |
| state      |          | string  | enabled<br>disabled<br>reset<br>reloaded   | Whether the firewall should be enabled, disabled, reset, or reloaded.            |
| to_ip      |          | string  |                                            | Destination IP address or CIDR.                                                  |

## Examples

```yaml
- name: Enable UFW
  ufw:
    state: enabled

- name: Set default incoming policy to deny
  ufw:
    policy: deny
    direction: in

- name: Allow SSH
  ufw:
    rule: allow
    port: "22"
    proto: tcp

- name: Allow HTTP
  ufw:
    rule: allow
    port: "80"
    proto: tcp

- name: Allow HTTPS
  ufw:
    rule: allow
    port: "443"
    proto: tcp

- name: Allow port from specific IP
  ufw:
    rule: allow
    port: "3306"
    proto: tcp
    from_ip: "192.168.1.0/24"

- name: Deny port
  ufw:
    rule: deny
    port: "23"
    proto: tcp

- name: Allow service
  ufw:
    rule: allow
    port: ssh

- name: Limit SSH connections
  ufw:
    rule: limit
    port: "22"
    proto: tcp

- name: Allow outgoing traffic to specific IP
  ufw:
    rule: allow
    to_ip: "10.0.0.1"
    direction: out

- name: Delete a rule
  ufw:
    rule: allow
    port: "8080"
    proto: tcp
    state: absent

- name: Reload UFW
  ufw:
    state: reloaded

- name: Reset UFW to defaults
  ufw:
    state: reset

- name: Allow traffic on an interface
  ufw:
    rule: allow
    port: "53"
    proto: udp
    interface: eth0

- name: Enable logging
  ufw:
    logging: on
```

{% endraw %}