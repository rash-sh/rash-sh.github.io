---
title: hostname
weight: 6190
indent: true
---

{% raw %}
# hostname

Manage system hostname.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                                                          |
|-----------|----------|--------|--------|------------------------------------------------------------------------------------------------------|
| name      | true     | string |        | Name of the host.                                                                                    |
| use       |          |        |        | Which strategy to use to update the hostname. If not set, auto-detects based on system capabilities. |

## Example

```yaml
- name: Set hostname
  hostname:
    name: web01

- name: Set hostname using systemd
  hostname:
    name: web01
    use: systemd

- name: Set hostname from inventory
  hostname:
    name: "{{ inventory_hostname }}"
```

{% endraw %}