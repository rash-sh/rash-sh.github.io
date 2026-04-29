---
title: poweroff
weight: 5145
indent: true
---

{% raw %}
# poweroff

Manage system power state (shutdown, poweroff, halt).

This module provides functionality to power off, shut down, or halt systems.
Supports scheduling delayed actions, custom messages, and forced shutdowns.
Useful for IoT devices, container hosts, and automated maintenance scenarios.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                 | Description |
|-----------|----------|---------|----------------------------------------|-------------|
| cancel    |          | boolean |                                        |             |
| delay     |          | integer |                                        |             |
| force     |          | boolean |                                        |             |
| msg       |          | string  |                                        |             |
| state     |          | string  | poweroff<br>shutdown<br>halt<br>reboot |             |

## Example

```yaml
- name: Power off system immediately
  poweroff:

- name: Power off with a message
  poweroff:
    msg: System powering off for maintenance

- name: Schedule shutdown in 5 minutes
  poweroff:
    state: shutdown
    delay: 300
    msg: System shutting down for maintenance in 5 minutes

- name: Halt the system
  poweroff:
    state: halt

- name: Force immediate poweroff
  poweroff:
    force: true

- name: Cancel scheduled poweroff
  poweroff:
    cancel: true

- name: Reboot from poweroff module
  poweroff:
    state: reboot
```

{% endraw %}