---
title: firewalld
weight: 5600
indent: true
---

{% raw %}
# firewalld

Manage firewall rules using firewalld.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values              | Description                                                                     |
|-----------|----------|---------|---------------------|---------------------------------------------------------------------------------|
| immediate |          | boolean |                     | Apply the change immediately without requiring a reload. **[default: `false`]** |
| permanent |          | boolean |                     | Make the change permanent (survive reboots). **[default: `false`]**             |
| port      |          | string  |                     | Port to allow or block (e.g., 8080/tcp, 53/udp).                                |
| service   |          | string  |                     | Service to allow or block (e.g., http, https, ssh).                             |
| state     | true     | string  | enabled<br>disabled | Whether the rule should be enabled or disabled.                                 |
| zone      |          | string  |                     | Firewall zone to operate on. **[default: `default` from system]**               |

## Examples

```yaml
- name: Allow HTTP traffic
  firewalld:
    service: http
    zone: public
    state: enabled
    permanent: true
    immediate: true

- name: Allow port 8080/tcp
  firewalld:
    port: 8080/tcp
    zone: public
    state: enabled
    permanent: true

- name: Block HTTPS traffic
  firewalld:
    service: https
    zone: public
    state: disabled
    permanent: true
    immediate: true

- name: Allow port range
  firewalld:
    port: 8000-8005/tcp
    zone: public
    state: enabled
    permanent: true
```

{% endraw %}