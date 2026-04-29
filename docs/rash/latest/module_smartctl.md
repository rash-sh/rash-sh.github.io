---
title: smartctl
weight: 5166
indent: true
---

{% raw %}
# smartctl

Monitor disk health using SMART (Self-Monitoring, Analysis and Reporting Technology).
Requires smartmontools to be installed.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                      | Description                                                                 |
|------------|----------|---------|-----------------------------|-----------------------------------------------------------------------------|
| attributes |          | boolean |                             | Return SMART attributes for the device. **[default: `false`]**              |
| device     | true     | string  |                             | Block device path (e.g., /dev/sda).                                         |
| health     |          | boolean |                             | Return overall SMART health assessment. **[default: `false`]**              |
| info       |          | boolean |                             | Return device identity and capabilities information. **[default: `false`]** |
| test       |          | string  | short<br>long<br>conveyance | Run a SMART self-test on the device.                                        |

## Examples

```yaml
- name: Check disk health
  smartctl:
    device: /dev/sda
    attributes: true
  register: disk_health

- name: Get disk info
  smartctl:
    device: /dev/sda
    info: true
  register: disk_info

- name: Run short self-test
  smartctl:
    device: /dev/sda
    test: short

- name: Run long self-test
  smartctl:
    device: /dev/sda
    test: long

- name: Run conveyance self-test
  smartctl:
    device: /dev/sda
    test: conveyance

- name: Check SMART health status
  smartctl:
    device: /dev/sda
    health: true
  register: health_status
```

{% endraw %}