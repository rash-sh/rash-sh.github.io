---
title: wipefs
weight: 6470
indent: true
---

{% raw %}
# wipefs

Wipe filesystem, RAID, or partition table signatures from block devices.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                         |
|-----------|----------|---------|--------|---------------------------------------------------------------------|
| all       |          | boolean |        | Wipe all signatures. **[default: `true`]**                          |
| backup    |          | string  |        | Create a signature backup file before wiping.                       |
| device    | true     | string  |        | The block device path to wipe (e.g., /dev/sdb, /dev/nvme0n1).       |
| force     |          | boolean |        | Force wipe even if the device is mounted. **[default: `false`]**    |
| no_act    |          | boolean |        | Dry run / check mode - do not actually wipe. **[default: `false`]** |
| offset    |          | integer |        | Offset to start wiping (in bytes).                                  |
| types     |          | array   |        | List of signature types to wipe (e.g., ext4, zfs, swap, raid).      |

## Example

```yaml
- name: Wipe all signatures from disk
  wipefs:
    device: /dev/nvme0n1
    all: true

- name: Wipe specific signature types
  wipefs:
    device: /dev/nvme0n1
    types:
      - zfs
      - raid
      - swap

- name: Wipe partition
  wipefs:
    device: /dev/nvme0n1p1

- name: Wipe multiple disks
  wipefs:
    device: "{{ item }}"
  loop:
    - /dev/nvme0n1
    - /dev/nvme1n1

- name: Dry run to check signatures
  wipefs:
    device: /dev/sdb
    no_act: true
```

{% endraw %}