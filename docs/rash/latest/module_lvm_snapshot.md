---
title: lvm_snapshot
weight: 6020
indent: true
---

{% raw %}
# lvm_snapshot

Manage LVM snapshots for backup and rollback operations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type   | Values            | Description                                                            |
|---------------|----------|--------|-------------------|------------------------------------------------------------------------|
| lv            | true     | string |                   | Logical volume name to snapshot.                                       |
| size          |          | string |                   | Size of the snapshot (e.g., 5G, 512M). Required when state is present. |
| snapshot_name | true     | string |                   | Name for the snapshot.                                                 |
| state         |          | string | present<br>absent | Whether the snapshot should exist or not. **[default: `"present"`]**   |
| vg            | true     | string |                   | Volume group name.                                                     |

## Example

```yaml
- name: Create a snapshot of root logical volume
  lvm_snapshot:
    vg: vg0
    lv: root
    snapshot_name: root_backup
    size: 5G

- name: Remove a snapshot
  lvm_snapshot:
    vg: vg0
    lv: root
    snapshot_name: root_backup
    state: absent
```

{% endraw %}