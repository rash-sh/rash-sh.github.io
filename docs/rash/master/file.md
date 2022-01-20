---
title: file
weight: 5300
indent: true
---

{% raw %}
# file

Manage files and file properties.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------|----------|--------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mode      |          | string |                                      | Permissions of the destination file or directory.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| path      | true     | string |                                      | Absolute path to the file being managed.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| state     |          | string | absent<br>directory<br>file<br>touch | If _absent_, directories will be recursively deleted, and files or symlinks will be unlinked. If _directory_, all intermediate subdirectories will be created if they do not exist. If _file_, with no other options, returns the current state of path. If _file_, even with other options (such as mode), the file will be modified if it exists but will NOT be created if it does not exist. If _touch_, an empty file will be created if the file does not exist |

## Example

```yaml
- file:
    path: /work
    state: absent

- file:
    path: /yea
    state: present
    mode: 0644
```

{% endraw %}