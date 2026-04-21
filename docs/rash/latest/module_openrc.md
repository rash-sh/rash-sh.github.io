---
title: openrc
weight: 6250
indent: true
---

{% raw %}
# openrc

Control OpenRC services. This module is designed for Alpine Linux and
other OpenRC-based systems.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                           | Description                                        |
|-----------|----------|---------|--------------------------------------------------|----------------------------------------------------|
| enabled   |          | boolean |                                                  | Whether the service should be enabled on boot.     |
| name      | true     | string  |                                                  | Name of the service to manage.                     |
| runlevel  |          | string  | default<br>boot<br>sysinit<br>shutdown<br>single | Runlevel for the service. **[default: `default`]** |
| state     |          | string  | reloaded<br>restarted<br>started<br>stopped      | State of the service.                              |

## Example

```yaml
- name: Start service nginx
  openrc:
    name: nginx
    state: started

- name: Stop service nginx
  openrc:
    name: nginx
    state: stopped

- name: Restart service nginx
  openrc:
    name: nginx
    state: restarted

- name: Reload service nginx
  openrc:
    name: nginx
    state: reloaded

- name: Enable service nginx and ensure it is started
  openrc:
    name: nginx
    enabled: true
    state: started

- name: Enable service nginx at boot in default runlevel
  openrc:
    name: nginx
    enabled: true

- name: Enable service nginx in boot runlevel
  openrc:
    name: nginx
    enabled: true
    runlevel: boot

- name: Disable service nginx at boot
  openrc:
    name: nginx
    enabled: false

- name: Check if nginx is running
  openrc:
    name: nginx
    state: started
  check_mode: true
```

{% endraw %}