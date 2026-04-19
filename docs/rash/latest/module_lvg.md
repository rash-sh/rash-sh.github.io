---
title: lvg
weight: 5760
indent: true
---

{% raw %}
# lvg

Manage LVM volume groups.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                               |
|-----------|----------|---------|-------------------|---------------------------------------------------------------------------|
| force     |          | boolean |                   | Force removal of volume group. **[default: `false`]**                     |
| pvs       |          | string  |                   | List of comma-separated physical volumes. Required when state is present. |
| state     |          | string  | present<br>absent | Whether the volume group should exist or not. **[default: `"present"`]**  |
| vg        | true     | string  |                   | Name of the volume group.                                                 |

## Example

```yaml
- name: Create volume group
  lvg:
    vg: data_vg
    pvs: /dev/sdb1,/dev/sdc1

- name: Create volume group with single PV
  lvg:
    vg: system_vg
    pvs: /dev/sda2

- name: Remove volume group
  lvg:
    vg: old_vg
    state: absent

- name: Force remove volume group
  lvg:
    vg: old_vg
    state: absent
    force: true
```

{% endraw %}