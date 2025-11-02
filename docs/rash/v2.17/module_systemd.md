---
title: systemd
weight: 5150
indent: true
---

{% raw %}
# systemd

Control systemd services.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|---------------|----------|---------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| daemon_reexec |          | boolean |                          | Run daemon-reexec before doing any other operations, to make sure systemd has read any changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| daemon_reload |          | boolean |                          | Run daemon-reload before doing any other operations, to make sure systemd has read any changes. **[default: `false`]**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| enabled       |          | boolean |                          | Whether the service should be enabled, disabled, or neither.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| force         |          | boolean |                          | Whether to override existing symlinks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| masked        |          | boolean |                          | Whether the unit should be masked or not. A masked unit is impossible to start. if set, requires `name`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| name          |          | string  |                          | Name of the service to manage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| scope         |          | string  | system<br>user<br>global | Run systemctl within a given service manager scope, either as the default system scope system, the current user’s scope user, or the scope of all users global. For systemd to work with user, the executing user must have its own instance of dbus started and accessible (systemd requirement). The user dbus process is normally started during normal login, but not during the run of Ansible tasks. Otherwise you will probably get a ‘Failed to connect to bus: no such file or directory’ error. The user must have access, normally given via setting the XDG_RUNTIME_DIR variable, see the example below. |
| state         |          |         |                          | State of the service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Example

```yaml
- name: Start service httpd
  systemd:
    name: httpd
    state: started

- name: Stop service httpd
  systemd:
    name: httpd
    state: stopped

- name: Restart service httpd
  systemd:
    name: httpd
    state: restarted

- name: Reload service httpd
  systemd:
    name: httpd
    state: reloaded

- name: Enable service httpd and ensure it is started
  systemd:
    name: httpd
    enabled: true
    state: started

- name: Enable service httpd on boot
  systemd:
    name: httpd
    enabled: true

- name: Reload systemd daemon
  systemd:
    daemon_reload: true
```

{% endraw %}