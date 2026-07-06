---
title: ufw
weight: 5185
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
| state      |          | string  | enabled<br>disabled<br>reset<br>reloaded   | Whether the firewall should be enabled, disabled, reset, or reloaded.            |
| policy     |          | string  | allow<br>deny<br>reject                    | Set the default policy for incoming or outgoing traffic.                         |
| direction  |          | string  | in<br>out                                  | The direction for the policy (incoming or outgoing). **[default: `"incoming"`]** |
| rule       |          | string  | allow<br>deny<br>reject<br>limit           | The rule action (allow, deny, reject, limit).                                    |
| port       |          | string  |                                            | Port number or service name.                                                     |
| proto      |          | string  | tcp<br>udp                                 | Protocol (tcp or udp).                                                           |
| from_ip    |          | string  |                                            | Source IP address or CIDR.                                                       |
| to_ip      |          | string  |                                            | Destination IP address or CIDR.                                                  |
| name       |          | string  |                                            | Service name to allow/deny (e.g., ssh, http).                                    |
| comment    |          | string  |                                            | Comment for the rule.                                                            |
| rule_state |          | string  | present<br>absent                          | Whether the rule should be present or absent. **[default: `"present"`]**         |
| interface  |          | string  |                                            | Network interface for the rule.                                                  |
| logging    |          | string  | off<br>on<br>low<br>medium<br>high<br>full | Logging level: off, on, low, medium, high, full.                                 |
| route      |          | boolean |                                            | Route traffic through the firewall. **[default: `false`]**                       |

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