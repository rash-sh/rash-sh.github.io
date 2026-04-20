---
title: swapfile
weight: 6370
indent: true
---

{% raw %}
# swapfile

Manage swap files on Linux systems.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                   | Description                                                                                                                                                                                                                                                                                      |
|-----------|----------|---------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| path      | true     | string  |                                          | Path to the swap file.                                                                                                                                                                                                                                                                           |
| priority  |          | integer |                                          | Priority of the swap file. Higher values indicate higher priority. Range: -1 to 32767. Default is -1 (auto priority).                                                                                                                                                                            |
| size      |          | string  |                                          | Size of the swap file. Supports suffixes like M (megabytes) and G (gigabytes). Required when state is present or created.                                                                                                                                                                        |
| state     |          | string  | present<br>created<br>absent<br>disabled | State of the swap file. If _present_, the swap file will be created and enabled. If _created_, the swap file will be created but not enabled. If _absent_, the swap file will be disabled and removed. If _disabled_, the swap file will be disabled but not removed. **[default: `"present"`]** |

## Examples

```yaml
- name: Create a 1GB swap file
  swapfile:
    path: /swapfile
    size: 1G
    state: present

- name: Create swap with custom priority
  swapfile:
    path: /swapfile
    size: 512M
    priority: 100
    state: present

- name: Remove swap file
  swapfile:
    path: /swapfile
    state: absent

- name: Disable existing swap
  swapfile:
    path: /swapfile
    state: disabled

- name: Create swap file without enabling it
  swapfile:
    path: /swapfile
    size: 1G
    state: created
```

{% endraw %}