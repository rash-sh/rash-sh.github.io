---
title: zpool
weight: 6430
indent: true
---

{% raw %}
# zpool

Manage ZFS storage pools.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                                                        | Description                                                                  |
|------------|----------|---------|---------------------------------------------------------------|------------------------------------------------------------------------------|
| altroot    |          | string  |                                                               | Alternate root mount point.                                                  |
| devices    |          | array   |                                                               | List of devices for pool creation.                                           |
| features   |          | object  |                                                               | Feature flags to enable.                                                     |
| force      |          | boolean |                                                               | Force operation. **[default: `false`]**                                      |
| guid       |          | string  |                                                               | Pool GUID for import by GUID.                                                |
| mounthost  |          | string  |                                                               | Mount host for pools.                                                        |
| name       | true     | string  |                                                               | Pool name.                                                                   |
| pool_type  |          | string  | single<br>mirror<br>raidz<br>raidz2<br>raidz3                 | Pool type (single, mirror, raidz, raidz2, raidz3). **[default: `"single"`]** |
| properties |          | object  |                                                               | Pool properties (ashift, autoexpand, etc.).                                  |
| state      |          | string  | info<br>present<br>absent<br>imported<br>exported<br>scrubbed | Pool state. **[default: `"info"`]**                                          |

## Example

```yaml
- name: Create mirrored ZFS pool
  zpool:
    name: rpool
    state: present
    type: mirror
    devices:
      - /dev/nvme0n1p3
      - /dev/nvme1n1p3
    properties:
      ashift: 12
      autoexpand: on
    features:
      encryption: enabled

- name: Create single device pool
  zpool:
    name: datapool
    state: present
    devices:
      - /dev/sda1

- name: Set pool property
  zpool:
    name: rpool
    state: present
    properties:
      cachefile: none

- name: Export pool
  zpool:
    name: rpool
    state: exported

- name: Import pool by name
  zpool:
    name: rpool
    state: imported

- name: Import pool by GUID
  zpool:
    guid: 1234567890abcdef
    state: imported
    name: rpool

- name: Destroy pool
  zpool:
    name: rpool
    state: absent
    force: true

- name: Start scrub
  zpool:
    name: rpool
    state: scrubbed

- name: Get pool info
  zpool:
    name: rpool
    state: info
```

{% endraw %}