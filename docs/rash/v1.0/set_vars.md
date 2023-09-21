---
title: set_vars
weight: 4500
indent: true
---
# set_vars

This module allows setting new variables.

## Parameters

```yaml
key_value:
  type: list
  required: true
  description: |
    This module takes key/value pairs and save un current Vars context.
```

## Example

```yaml
- set_vars:
    foo: boo

- assert
    that:
      - foo == 'boo'
```