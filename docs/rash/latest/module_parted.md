---
title: parted
weight: 5900
indent: true
---

{% raw %}
# parted

Manage disk partitions using parted.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                    | Description                                                                                                                                                                                                                   |
|------------|----------|---------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| device     | true     | string  |                           | The block device (e.g., /dev/sdb).                                                                                                                                                                                            |
| fs_type    |          | string  |                           | Filesystem type for the partition (e.g., ext4, xfs, fat32).                                                                                                                                                                   |
| label      |          | string  |                           | Disk label type (e.g., gpt, msdos). Only used when creating a new partition table.                                                                                                                                            |
| number     |          | integer |                           | The partition number (1-128 for GPT, 1-4 for MBR).                                                                                                                                                                            |
| part_end   |          | string  |                           | End of the partition (e.g., "100%", "10GB", "500MB"). **[default: `"100%"`]**                                                                                                                                                 |
| part_start |          | string  |                           | Start of the partition (e.g., "0%", "1GB", "100MB"). **[default: `"0%"`]**                                                                                                                                                    |
| state      |          | string  | present<br>absent<br>info | Desired state of the partition. If _present_, create the partition if it doesn't exist. If _absent_, remove the partition if it exists. If _info_, return information about partitions on the device. **[default: `"info"`]** |

## Example

```yaml
- name: Create partition
  parted:
    device: /dev/sdb
    number: 1
    state: present
    part_start: 0%
    part_end: 100%

- name: Create partition with filesystem type
  parted:
    device: /dev/sdb
    number: 2
    state: present
    part_start: 50%
    part_end: 100%
    fs_type: ext4

- name: Remove partition
  parted:
    device: /dev/sdb
    number: 1
    state: absent

- name: Get partition info
  parted:
    device: /dev/sdb
    state: info
  register: part_info
```

{% endraw %}