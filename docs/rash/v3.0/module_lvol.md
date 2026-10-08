---
title: lvol
weight: 5103
indent: true
---

{% raw %}
# lvol

Manage LVM logical volumes.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values            | Description                                                                |
|------------|----------|---------|-------------------|----------------------------------------------------------------------------|
| vg         | true     | string  |                   | Volume group name.                                                         |
| lv         | true     | string  |                   | Logical volume name.                                                       |
| size       |          | string  |                   | Size of the logical volume (e.g., 10G, 512M).                              |
| state      |          | string  | present<br>absent | Whether the logical volume should exist or not. **[default: `"present"`]** |
| force      |          | boolean |                   | Force removal of logical volume. **[default: `false`]**                    |
| filesystem |          | string  |                   | Filesystem type to create on the logical volume.                           |
| shrink     |          | boolean |                   | Allow shrinking of the logical volume. **[default: `false`]**              |
| resizefs   |          | boolean |                   | Resize the filesystem with the logical volume. **[default: `false`]**      |

## Example

```yaml
- name: Create a logical volume
  lvol:
    vg: vgdata
    lv: lvdata
    size: 10G

- name: Create logical volume with filesystem
  lvol:
    vg: vgdata
    lv: lvdata
    size: 50G
    filesystem: ext4

- name: Resize logical volume with filesystem
  lvol:
    vg: vgdata
    lv: lvdata
    size: 100G
    resizefs: true

- name: Remove logical volume
  lvol:
    vg: vgdata
    lv: lvdata
    state: absent

- name: Force remove logical volume
  lvol:
    vg: vgdata
    lv: lvdata
    state: absent
    force: true
```

{% endraw %}