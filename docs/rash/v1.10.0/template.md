---
title: template
weight: 5800
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

| Parameter | Required | Type   | Values | Description                                                                                                                                                                                 |
|-----------|----------|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dest      | true     | string |        | Absolute path where the file should be rendered to.                                                                                                                                         |
| mode      |          | string |        | Permissions of the destination file or directory. The mode may also be the special string `preserve`. `preserve` means that the file will be given the same permissions as the source file. |
| src       | true     | string |        | Path of Tera formatted template. This can be a relative or an absolute path.                                                                                                                |

## Examples

```yaml
- template:
    src: "template.j2"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}