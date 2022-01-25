---
title: debug
weight: 5700
indent: true
---

{% raw %}
# debug

This module prints statements during execution and can be useful for debugging variables or
expressions. Useful for debugging together with the `when` directive.

## Attributes

```yaml
check_mode:
  support: none
```}

## Parameters

| Parameter | Required | Type   | Values | Description                                                                                                                                                                                                                                                |
|-----------|----------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| msg       |          | string |        | The customized message that is printed. If omitted, prints a generic message.                                                                                                                                                                              |
| var       |          | string |        | A variable name to debug. Mutually exclusive with the msg option. Be aware that this option already runs in Tera context and has an implicit `{{ }` wrapping, so you should not be using Tera delimiters unless you are looking for double interpolation. |

## Example

```yaml
- debug:
    msg: "{{ rash.user.uid }}"

- debug:
    var: rash.user.gid
```

{% endraw %}