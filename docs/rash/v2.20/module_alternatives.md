---
title: alternatives
weight: 5020
indent: true
---

{% raw %}
# alternatives

Manage symbolic links determining default commands.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                           |
|-----------|----------|---------|--------|-----------------------------------------------------------------------|
| link      |          | string  |        | The path to the symbolic link (default is auto-detected).             |
| name      | true     | string  |        | The generic name of the link group (e.g., java, editor, python).      |
| path      | true     | string  |        | The path to the real executable that should be linked to.             |
| priority  |          | integer |        | The priority of the alternative (higher values have higher priority). |

## Examples

```yaml
- name: Set Java 11 as default java
  alternatives:
    name: java
    path: /usr/lib/jvm/java-11-openjdk/bin/java

- name: Set vim as default editor
  alternatives:
    name: editor
    path: /usr/bin/vim.basic

- name: Set python to python3 with custom link
  alternatives:
    name: python
    path: /usr/bin/python3
    link: /usr/bin/python
```

{% endraw %}