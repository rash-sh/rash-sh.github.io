---
title: template
weight: 4400
indent: true
---

{% raw %}
# template

Render [Tera template](https://tera.netlify.app/docs/#templates).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                                  |
|-----------|----------|--------|--------|------------------------------------------------------------------------------|
| dest      | true     | string |        | Absolute path where the file should be rendered to.                          |
| mode      |          | string |        | Permissions of the destination file or directory.                            |
| src       | true     | string |        | Path of Tera formatted template. This can be a relative or an absolute path. |

## Examples

```yaml
- template:
    src: "template.j2"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}