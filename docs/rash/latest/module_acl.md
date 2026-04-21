---
title: acl
weight: 5001
indent: true
---

{% raw %}
# acl

Manage file Access Control Lists (ACLs).

ACLs provide fine-grained permission control beyond standard Unix permissions.
They allow per-user and per-group permissions on files and directories.
Useful for containers, IoT devices, and multi-user file sharing scenarios.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                     | Description                                                                                                         |
|-----------|----------|---------|----------------------------|---------------------------------------------------------------------------------------------------------------------|
| default   |          | boolean |                            | Set default ACL (inherited by new files in directory). **[default: `false`]**                                       |
| group     |          | string  |                            | The group to set ACL for (e.g. "developers").                                                                       |
| mode      |          | string  |                            | The permissions mode (e.g. "r", "rw", "rwx", "rX"). Required when state=present.                                    |
| path      | true     | string  |                            | The full path to the file or directory.                                                                             |
| recurse   |          | boolean |                            | Apply ACLs recursively to directory contents. **[default: `false`]**                                                |
| state     |          | string  | present<br>absent<br>query | Whether the ACL should exist or not. Use query to retrieve current ACLs without changes. **[default: `"present"`]** |
| user      |          | string  |                            | The user to set ACL for (e.g. "nginx").                                                                             |

## Examples

```yaml
- name: Give user nginx read access to a file
  acl:
    path: /etc/app/config.json
    user: nginx
    mode: "r"

- name: Give group developers read-write access
  acl:
    path: /data/project
    group: developers
    mode: "rw"

- name: Set default ACL for directory (inherited by new files)
  acl:
    path: /data/shared
    user: appuser
    mode: "rwx"
    default: true

- name: Remove user ACL entry
  acl:
    path: /data/file.txt
    user: olduser
    state: absent

- name: Query current ACLs
  acl:
    path: /etc/app/config.json
    state: query
  register: file_acls

- name: Apply ACLs recursively
  acl:
    path: /data/project
    user: nginx
    mode: "rX"
    recurse: true
```

{% endraw %}