---
title: set_vars
weight: 6140
indent: true
---

{% raw %}
# set_vars

This module allows setting new variables.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type  | Values | Description                                                         |
|-----------|----------|-------|--------|---------------------------------------------------------------------|
| key_value | true     | map   |        | This module takes key/value pairs and save un current Vars context. |

## Example

```yaml
- set_vars:
    foo: boo
    buu:
      - 1
      - 2
      - 3
    zoo:
      suu: yea

- assert:
    that:
      - foo == 'boo'
      - buu[2] == 3
      - zoo.suu == 'yea'
```

{% endraw %}