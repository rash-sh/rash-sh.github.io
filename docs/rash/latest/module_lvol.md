---
title: lvol
weight: 5610
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
| filesystem |          | string  |                   | Filesystem type to create on the logical volume.                           |
| force      |          | boolean |                   | Force removal of logical volume. **[default: `false`]**                    |
| lv         | true     | string  |                   | Logical volume name.                                                       |
| resizefs   |          | boolean |                   | Resize the filesystem with the logical volume. **[default: `false`]**      |
| shrink     |          | boolean |                   | Allow shrinking of the logical volume. **[default: `false`]**              |
| size       |          | string  |                   | Size of the logical volume (e.g., 10G, 512M).                              |
| state      |          | string  | present<br>absent | Whether the logical volume should exist or not. **[default: `"present"`]** |
| vg         | true     | string  |                   | Volume group name.                                                         |

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