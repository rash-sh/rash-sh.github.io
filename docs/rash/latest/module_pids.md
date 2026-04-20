---
title: pids
weight: 6100
indent: true
---

{% raw %}
# pids

Find process IDs matching criteria.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                             |
|-----------|----------|--------|--------|-------------------------------------------------------------------------|
| command   |          | string |        | Regex pattern to match against full command line.                       |
| exclude   |          | array  |        | Regex pattern to exclude processes from the result.                     |
| pattern   |          | string |        | Regex pattern to match process name (comm field from /proc/[pid]/comm). |
| user      |          | string |        | User name or UID running the process.                                   |

## Example

```yaml
- name: Find nginx processes
  pids:
    pattern: nginx
  register: nginx_pids

- name: Find processes by user
  pids:
    user: root
  register: root_pids

- name: Find processes with command pattern
  pids:
    command: python.*script
  register: python_pids

- name: Find all processes excluding current
  pids:
    pattern: .*
    exclude: rash
```

{% endraw %}