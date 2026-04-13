---
title: runit
weight: 5970
indent: true
---

{% raw %}
# runit

Manage Runit services.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values                                      | Description                                                                            |
|-------------|----------|---------|---------------------------------------------|----------------------------------------------------------------------------------------|
| enabled     |          | boolean |                                             | Whether the service should be enabled at boot. **[default: `true`]**                   |
| name        | true     | string  |                                             | Name of the service to manage.                                                         |
| service_dir |          | string  |                                             | Runit service directory where service definitions are stored. **[default: `/etc/sv`]** |
| state       |          | string  | reloaded<br>restarted<br>started<br>stopped | Whether the service should be started, stopped, restarted, or reloaded.                |

## Example

```yaml
- name: Start nginx under runit
  runit:
    name: nginx
    state: started
    enabled: true

- name: Stop nginx service
  runit:
    name: nginx
    state: stopped

- name: Restart nginx service
  runit:
    name: nginx
    state: restarted

- name: Reload nginx service
  runit:
    name: nginx
    state: reloaded

- name: Enable nginx at boot
  runit:
    name: nginx
    enabled: true

- name: Disable nginx at boot
  runit:
    name: nginx
    enabled: false

- name: Use custom service directory
  runit:
    name: nginx
    state: started
    service_dir: /etc/sv
```

{% endraw %}