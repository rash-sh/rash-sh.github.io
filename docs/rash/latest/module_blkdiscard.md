---
title: blkdiscard
weight: 5140
indent: true
---

{% raw %}
# blkdiscard

Securely erase SSDs and NVMe drives using the blkdiscard command.

This module discards (TRIMs) blocks on a device, which is essential for
SSDs and NVMe drives to maintain performance and longevity. Unlike
traditional hard drives, SSDs need TRIM/DISCARD commands for proper reset.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                 |
|-----------|----------|---------|--------|-----------------------------------------------------------------------------|
| device    | true     | string  |        | Block device path (e.g., /dev/nvme0n1).                                     |
| force     |          | boolean |        | Force discard even if device is mounted (dangerous). **[default: `false`]** |
| length    |          | integer |        | Length in bytes to discard.                                                 |
| offset    |          | integer |        | Starting offset in bytes.                                                   |
| secure    |          | boolean |        | Perform secure erase. **[default: `false`]**                                |
| step      |          | integer |        | Step size for incremental discard.                                          |
| zeroout   |          | boolean |        | Zero out instead of discard. **[default: `false`]**                         |

## Example

```yaml
- name: Secure erase SSD
  blkdiscard:
    device: /dev/nvme0n1

- name: Secure erase with zeroout
  blkdiscard:
    device: /dev/nvme0n1
    zeroout: true

- name: Discard specific range
  blkdiscard:
    device: /dev/nvme0n1
    offset: 0
    length: 1073741824

- name: Force discard (dangerous)
  blkdiscard:
    device: /dev/nvme0n1
    force: true

- name: Secure erase multiple disks
  blkdiscard:
    device: "{{ item }}"
  loop:
    - /dev/nvme0n1
    - /dev/nvme1n1
```

{% endraw %}