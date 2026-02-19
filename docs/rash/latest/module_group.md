---
title: group
weight: 6180
indent: true
---

{% raw %}
# group

Manage groups and group attributes.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                       |
|-----------|----------|---------|-------------------|-------------------------------------------------------------------|
| gid       |          | integer |                   | Group ID (GID) of the group.                                      |
| name      | true     | string  |                   | Name of the group to create, remove or modify.                    |
| state     |          | string  | absent<br>present | Whether the group should exist or not. **[default: `"present"`]** |
| system    |          | boolean |                   | Create as system group (gid < 1000). **[default: `false`]**       |

## Example

```yaml
- group:
    name: docker
    gid: 999

- group:
    name: myservice
    system: yes

- group:
    name: oldgroup
    state: absent
```

{% endraw %}