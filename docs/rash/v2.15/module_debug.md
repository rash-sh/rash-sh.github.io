---
title: debug
weight: 5500
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
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                                   |
|-----------|----------|--------|--------|-------------------------------------------------------------------------------|
| msg       |          | string |        | The customized message that is printed. If omitted, prints a generic message. |
| var       |          | string |        | A variable name to debug. Mutually exclusive with the msg option.             |

## Example

```yaml
- debug:
    msg: "{{ rash.user.uid }}"

- debug:
    var: rash.user.gid

- name: Print all template engine context
  debug:
    msg: "{{ debug() }}"
```

{% endraw %}