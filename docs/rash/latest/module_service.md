---
title: service
weight: 6010
indent: true
---

{% raw %}
# service

Manage services on target hosts. This module is a wrapper for service
management on different init systems (systemd, sysvinit, openrc).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                      | Description                                                             |
|-----------|----------|---------|---------------------------------------------|-------------------------------------------------------------------------|
| enabled   |          | boolean |                                             | Whether the service should be enabled, disabled, or neither.            |
| name      | true     | string  |                                             | Name of the service to manage.                                          |
| state     |          | string  | reloaded<br>restarted<br>started<br>stopped | State of the service.                                                   |
| use       |          | string  | systemd<br>openrc<br>sysvinit               | The service manager to use. If not specified, it will be auto-detected. |

## Example

```yaml
- name: Start service httpd
  service:
    name: httpd
    state: started

- name: Stop service httpd
  service:
    name: httpd
    state: stopped

- name: Restart service httpd
  service:
    name: httpd
    state: restarted

- name: Reload service httpd
  service:
    name: httpd
    state: reloaded

- name: Enable service httpd and ensure it is started
  service:
    name: httpd
    enabled: true
    state: started

- name: Enable service httpd on boot
  service:
    name: httpd
    enabled: true
```

{% endraw %}