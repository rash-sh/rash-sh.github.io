---
title: copy
weight: 4100
indent: true
---

{% raw %}
# copy

Copy files to path.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values | Description                                           |
|-----------|----------|--------|--------|-------------------------------------------------------|
| dest      | true     | string |        | The absolute path where the file should be copied to. |
| mode      |          | string |        | Permissions of the destination file or directory.     |

## Examples

```yaml
- copy:
    content: "supersecret"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}