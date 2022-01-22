---
title: copy
weight: 5600
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

| Parameter | Required | Type   | Values | Description                                                                                                                                                                                 |
|-----------|----------|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| content   |          | string |        | When used instead of src, sets the contents of a file directly to the specified value.                                                                                                      |
| src       |          | string |        | Path to a file should be copied to dest.                                                                                                                                                    |
| dest      | true     | string |        | The absolute path where the file should be copied to.                                                                                                                                       |
| mode      |          | string |        | Permissions of the destination file or directory. The mode may also be the special string `preserve`. `preserve` means that the file will be given the same permissions as the source file. |

## Examples

```yaml
- copy:
    content: "supersecret"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}