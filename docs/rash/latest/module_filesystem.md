---
title: filesystem
weight: 5470
indent: true
---

{% raw %}
# filesystem

Create filesystems on block devices.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                               | Description                                                                                   |
|-----------|----------|---------|------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| dev       | true     | string  |                                                      | Target block device path.                                                                     |
| force     |          | boolean |                                                      | Force filesystem creation even if the device already has a filesystem. **[default: `false`]** |
| fstype    | true     | string  | ext4<br>ext3<br>ext2<br>xfs<br>btrfs<br>vfat<br>swap | Filesystem type to create.                                                                    |
| opts      |          | string  |                                                      | Additional options to pass to the mkfs command.                                               |

## Example

```yaml
- name: Create ext4 filesystem
  filesystem:
    dev: /dev/sdb1
    fstype: ext4

- name: Create xfs filesystem with force
  filesystem:
    dev: /dev/sdc1
    fstype: xfs
    force: true

- name: Create btrfs filesystem with options
  filesystem:
    dev: /dev/sdd1
    fstype: btrfs
    opts: -L mydata
```

{% endraw %}