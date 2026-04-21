---
title: btrfs
weight: 5180
indent: true
---

{% raw %}
# btrfs

Manage Btrfs subvolumes, snapshots, and properties.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                           |
|-------------|----------|---------|-------------------|-----------------------------------------------------------------------|
| compression |          | string  |                   | Compression algorithm (e.g., zstd, lzo, zlib).                        |
| device      | true     | string  |                   | Path to the Btrfs device or mount point.                              |
| properties  |          | object  |                   | Dict of subvolume properties to set.                                  |
| readonly    |          | boolean |                   | Whether the snapshot should be read-only. **[default: `true`]**       |
| snapshot    |          | string  |                   | Destination path for a snapshot of the subvolume.                     |
| state       |          | string  | present<br>absent | Whether the subvolume should exist or not. **[default: `"present"`]** |
| subvolume   | true     | string  |                   | Subvolume path relative to the mount point.                           |

## Example

```yaml
- name: Create Btrfs subvolume
  btrfs:
    device: /dev/sda1
    subvolume: /data/app
    state: present

- name: Create subvolume with compression
  btrfs:
    device: /dev/sda1
    subvolume: /data/compressed
    state: present
    compression: zstd

- name: Create read-only snapshot
  btrfs:
    device: /dev/sda1
    subvolume: /data/app
    snapshot: /data/app-snap
    readonly: true

- name: Create read-write snapshot
  btrfs:
    device: /dev/sda1
    subvolume: /data/app
    snapshot: /data/app-rw-snap
    readonly: false

- name: Set subvolume properties
  btrfs:
    device: /dev/sda1
    subvolume: /data/app
    state: present
    properties:
      compression: zstd

- name: Delete subvolume
  btrfs:
    device: /dev/sda1
    subvolume: /data/old
    state: absent

- name: Delete snapshot
  btrfs:
    device: /dev/sda1
    subvolume: /data/app-snap
    state: absent
```

{% endraw %}