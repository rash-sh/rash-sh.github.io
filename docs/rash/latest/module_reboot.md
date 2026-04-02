---
title: reboot
weight: 5900
indent: true
---

{% raw %}
# reboot

Manage system reboots.

This module provides functionality to reboot systems, schedule delayed reboots,
and check if a reboot is required. Useful for IoT devices, container hosts,
and configuration management scenarios.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                                  | Description                                                                                      |
|----------------|----------|---------|-----------------------------------------|--------------------------------------------------------------------------------------------------|
| cancel         |          | boolean |                                         | Cancel a scheduled reboot.                                                                       |
| check_required |          | boolean |                                         | Check if a reboot is required without actually rebooting. Returns reboot_required in the result. |
| delay          |          | integer |                                         | Seconds to wait before rebooting. Set to 0 for immediate reboot.                                 |
| method         |          | string  | auto<br>systemctl<br>reboot<br>shutdown | Method to use for rebooting. Options: auto (default), systemctl, reboot, shutdown.               |
| msg            |          | string  |                                         | Message to display before rebooting.                                                             |

## Example

```yaml
- name: Reboot system immediately
  reboot:

- name: Reboot with a message
  reboot:
    msg: System rebooting for maintenance

- name: Schedule reboot in 5 minutes
  reboot:
    delay: 300
    msg: System rebooting for maintenance in 5 minutes

- name: Check if reboot is required
  reboot:
    check_required: true
  register: reboot_status

- name: Reboot if required
  reboot:
  when: reboot_status.reboot_required

- name: Reboot using systemctl
  reboot:
    method: systemctl

- name: Cancel scheduled reboot
  reboot:
    cancel: true
```

{% endraw %}