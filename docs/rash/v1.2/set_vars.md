---
title: set_vars
weight: 4400
indent: true
---

{% raw %}
# set_vars

This module allows setting new variables.

## Parameters

| Parameter | Required | Type  | Values | Description                                                         |
|-----------|----------|-------|--------|---------------------------------------------------------------------|
| key_value | true     | map   |        | This module takes key/value pairs and save un current Vars context. |

## Example

```yaml
- set_vars:
    foo: boo

- assert
    that:
      - foo == 'boo'
```

{% endraw %}