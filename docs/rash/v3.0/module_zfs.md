---
title: zfs
weight: 5200
indent: true
---

{% raw %}
# zfs

Manage ZFS datasets.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values                                                        | Description                                                             |
|------------------|----------|---------|---------------------------------------------------------------|-------------------------------------------------------------------------|
| name             | true     | string  |                                                               | Dataset name (e.g., rpool/ROOT/ubuntu).                                 |
| state            |          | string  | info<br>present<br>absent<br>mounted<br>unmounted<br>snapshot | State of the dataset. **[default: `"info"`]**                           |
| properties       |          | object  |                                                               | Dict of dataset properties (mountpoint, compression, encryption, etc.). |
| extra_properties |          | object  |                                                               | Dict of properties that trigger change on any modification.             |
| create_parent    |          | boolean |                                                               | Create parent datasets. **[default: `false`]**                          |
| recursive        |          | boolean |                                                               | Apply recursively. **[default: `false`]**                               |
| force            |          | boolean |                                                               | Force unmount. **[default: `false`]**                                   |
| snapshot_suffix  |          | string  |                                                               | Snapshot suffix (used with state: snapshot).                            |

## Example

```yaml
- name: Create encrypted root dataset
  zfs:
    name: rpool/ROOT
    state: present
    properties:
      mountpoint: legacy
      canmount: on
      encryption: aes-256-gcm
      keylocation: file:etc/zfs/zfs-key
      keyformat: passphrase

- name: Create dataset with compression
  zfs:
    name: rpool/ROOT/ubuntu
    state: present
    create_parent: true
    properties:
      mountpoint: /
      compression: zstd
      atime: off
      recordsize: 32K

- name: Create unmounted dataset for OpenEBS
  zfs:
    name: rpool/openebs
    state: present
    properties:
      mountpoint: none
      canmount: off

- name: Create snapshot
  zfs:
    name: rpool/ROOT/ubuntu
    state: snapshot
    snapshot_suffix: pre-upgrade
    recursive: true

- name: Mount dataset
  zfs:
    name: rpool/ROOT/ubuntu
    state: mounted

- name: Unmount dataset
  zfs:
    name: rpool/ROOT/ubuntu
    state: unmounted

- name: Destroy dataset
  zfs:
    name: rpool/old
    state: absent
    recursive: true
```

{% endraw %}