---
title: vdo
weight: 6310
indent: true
---

{% raw %}
# vdo

Manage VDO (Virtual Data Optimizer) volumes.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values            | Description                                                            |
|---------------|----------|---------|-------------------|------------------------------------------------------------------------|
| compression   |          | boolean |                   | Enable compression. **[default: `true`]**                              |
| deduplication |          | boolean |                   | Enable deduplication. **[default: `true`]**                            |
| device        |          | string  |                   | Underlying block device.                                               |
| logicalsize   |          | string  |                   | Logical size of the VDO volume (e.g., 100G, 1T).                       |
| name          | true     | string  |                   | VDO volume name.                                                       |
| state         |          | string  | present<br>absent | Whether the VDO volume should exist or not. **[default: `"present"`]** |

## Example

```yaml
- name: Create VDO volume
  vdo:
    name: vdo_vol
    device: /dev/sdb
    logicalsize: 100G

- name: Create VDO volume with compression disabled
  vdo:
    name: vdo_vol
    device: /dev/sdb
    logicalsize: 200G
    compression: false

- name: Create VDO volume with deduplication disabled
  vdo:
    name: vdo_vol
    device: /dev/sdb
    logicalsize: 50G
    deduplication: false

- name: Remove VDO volume
  vdo:
    name: vdo_vol
    state: absent
```

{% endraw %}