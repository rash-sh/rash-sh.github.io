---
title: tempfile
weight: 6100
indent: true
---

{% raw %}
# tempfile

Create temporary files and directories.

This module creates temporary files or directories with optional prefix,
suffix, and permission settings. The created path is returned in the
output and can be registered for use in subsequent tasks.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                      |
|-----------|----------|--------|-------------------|------------------------------------------------------------------|
| mode      |          | string |                   | Permissions of the temporary file or directory.                  |
| path      |          | string |                   | The parent directory where the temporary object will be created. |
| prefix    |          | string |                   | Prefix for the temporary name.                                   |
| state     | true     | string | file<br>directory | The type of temporary object to create.                          |
| suffix    |          | string |                   | Suffix for the temporary name (only valid for files).            |

## Example

```yaml
- name: Create a temporary directory
  tempfile:
    state: directory
    prefix: myapp_
  register: temp_dir

- name: Create a temporary file
  tempfile:
    state: file
    suffix: .txt
  register: temp_file

- name: Create temp file with custom mode
  tempfile:
    state: file
    path: /var/tmp
    mode: "0600"
  register: secure_temp
```

{% endraw %}