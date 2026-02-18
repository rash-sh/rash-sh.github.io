---
title: mount
weight: 6210
indent: true
---

{% raw %}
# mount

Control filesystem mounts.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values                                      | Description                                                                                                                                                                                                                                                                                                                       |
|-----------|----------|--------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fstype    |          | string |                                             | Filesystem type. Required when state is mounted.                                                                                                                                                                                                                                                                                  |
| opts      |          | string |                                             | Mount options.                                                                                                                                                                                                                                                                                                                    |
| path      | true     | string |                                             | Path to the mount point.                                                                                                                                                                                                                                                                                                          |
| src       |          | string |                                             | Device to be mounted on path. Required when state is mounted.                                                                                                                                                                                                                                                                     |
| state     |          | string | absent<br>mounted<br>unmounted<br>remounted | State of the mount point. If _mounted_, the device will be actively mounted. If _unmounted_, the device will be unmounted without modifying fstab. If _absent_, the mount point will be unmounted and removed from fstab (fstab not yet supported). If _remounted_, the mount point will be remounted. **[default: `"mounted"`]** |

## Example

```yaml
- name: Mount data volume
  mount:
    path: /mnt/data
    src: /dev/sdb1
    fstype: ext4
    state: mounted

- name: Unmount data volume
  mount:
    path: /mnt/data
    state: unmounted

- name: Mount NFS share
  mount:
    path: /mnt/nfs
    src: 192.168.1.100:/export/data
    fstype: nfs
    opts: rw,hard,intr
    state: mounted

- name: Remount with new options
  mount:
    path: /mnt/data
    state: remounted

- name: Get mount info
  mount:
    path: /mnt/data
    state: mounted
  register: mount_info
```

{% endraw %}