---
title: copy
weight: 4500
indent: true
---

{% raw %}
# copy

Copy files to path.

## Parameters

| Parameter | Required | Type   | Values | Description                                                  |
|-----------|----------|--------|--------|--------------------------------------------------------------|
| content   | true     | string |        | Sets the contents of a file directly to the specified value. |
| dest      | true     | string |        | The absolute path where the file should be copied to.        |
| mode      |          | string |        | Permissions of the destination file or directory.            |

## Examples

```yaml
- copy:
    content: "supersecret"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}