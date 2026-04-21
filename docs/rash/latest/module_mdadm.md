---
title: mdadm
weight: 6010
indent: true
---

{% raw %}
# mdadm

Manage Linux software RAID arrays using mdadm.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values                                        | Description                                                  |
|---------------|----------|---------|-----------------------------------------------|--------------------------------------------------------------|
| action        |          | string  | create<br>assemble<br>stop<br>destroy<br>info | Action to perform on the RAID array. **[default: `"info"`]** |
| bitmap        |          | boolean |                                               | Enable write-intent bitmap. **[default: `false`]**           |
| chunk         |          | string  |                                               | Chunk size (e.g., 64K, 512K).                                |
| device        |          | string  |                                               | RAID device path (e.g., /dev/md0).                           |
| devices       |          | array   |                                               | List of component devices.                                   |
| force         |          | boolean |                                               | Force operation. **[default: `false`]**                      |
| level         |          | integer |                                               | RAID level (0, 1, 5, 6, 10).                                 |
| metadata      |          | string  |                                               | Metadata format. **[default: `"1.2"`]**                      |
| name          |          | string  |                                               | Array name.                                                  |
| raid_devices  |          | integer |                                               | Number of active devices in the array.                       |
| spare_devices |          | array   |                                               | List of spare devices.                                       |

## Example

```yaml
- name: Create RAID1 array
  mdadm:
    action: create
    device: /dev/md0
    name: data
    level: 1
    devices:
      - /dev/sdb1
      - /dev/sdc1
    metadata: 1.2

- name: Assemble existing array
  mdadm:
    action: assemble
    device: /dev/md0
    devices:
      - /dev/sdb1
      - /dev/sdc1

- name: Stop RAID array
  mdadm:
    action: stop
    device: /dev/md0

- name: Destroy RAID array (wipe superblocks)
  mdadm:
    action: destroy
    devices:
      - /dev/sdb1
      - /dev/sdc1
    force: true

- name: Get array info
  mdadm:
    action: info
    device: /dev/md0
  register: raid_info
```

{% endraw %}