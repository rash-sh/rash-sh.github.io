---
title: template
weight: 6250
indent: true
---

{% raw %}
# template

Render [MiniJinja template](https://docs.rs/minijinja/latest/minijinja/syntax/index.html).

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
| src       | true     | string |        | Path of Jinja formatted template. This can be a relative or an absolute path.                                                                                                               |

## Examples

```yaml
- template:
    src: "template.j2"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```

{% endraw %}