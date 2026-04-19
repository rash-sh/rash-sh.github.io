---
title: xattr
weight: 6330
indent: true
---

{% raw %}
# xattr

Manage extended file attributes (xattrs).

Extended attributes are key-value metadata stored on filesystems that support them.
They are useful for security labeling, custom metadata, and container/overlay filesystem
configurations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                | Description                                                                                                                     |
|-----------|----------|---------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| follow    |          | boolean |                                       | Whether to follow symlinks. **[default: `true`]**                                                                               |
| key       |          | string  |                                       | The name of the extended attribute key. Required for state=present and state=absent.                                            |
| namespace |          | string  | user<br>trusted<br>system<br>security | The namespace for the attribute. **[default: `"user"`]**                                                                        |
| path      | true     | string  |                                       | The full path to the file or directory.                                                                                         |
| state     |          | string  | present<br>absent<br>all              | Whether to set/get/remove the attribute (present), remove it (absent), or list all attributes (all). **[default: `"present"`]** |
| value     |          | string  |                                       | The value to set for the extended attribute. Required for state=present.                                                        |

## Example

```yaml
- xattr:
    path: /etc/app/config.json
    key: user.comment
    value: "Application configuration"

- xattr:
    path: /data/file.txt
    key: user.backup_status
    state: absent

- xattr:
    path: /var/log/app.log
    key: security.label
    value: "confidential"
    namespace: security

- name: Get all xattrs for a file
  xattr:
    path: /etc/app/config.json
    state: all
  register: file_xattrs

- debug:
    var: file_xattrs.xattrs
```

{% endraw %}