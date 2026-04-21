---
title: dmsetup
weight: 5370
indent: true
---

{% raw %}
# dmsetup

Manage Linux device mapper devices.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                          | Description                                               |
|-----------|----------|---------|-------------------------------------------------|-----------------------------------------------------------|
| action    | true     | string  | create<br>remove<br>remove_all<br>info<br>table | Action to perform on the device mapper device.            |
| deferred  |          | boolean |                                                 | Use deferred removal. **[default: `false`]**              |
| force     |          | boolean |                                                 | Force operation. **[default: `false`]**                   |
| name      |          | string  |                                                 | Device mapper device name.                                |
| retry     |          | integer |                                                 | Retry on failure.                                         |
| table     |          | array   |                                                 | Table specification for device (used with create action). |
| uuid      |          | string  |                                                 | Device UUID.                                              |

## Example

```yaml
- name: Remove all device mapper mappings
  dmsetup:
    action: remove_all

- name: Remove specific device
  dmsetup:
    action: remove
    name: vg0-lv_root
    force: true

- name: Get device info
  dmsetup:
    action: info
    name: vg0-lv_root
  register: dm_info

- name: Create linear mapping
  dmsetup:
    action: create
    name: my_device
    table:
      - "0 2097152 linear /dev/sdb1 0"

- name: List all devices
  dmsetup:
    action: info
  register: all_devices
```

{% endraw %}