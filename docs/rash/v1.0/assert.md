---
title: assert
weight: 4100
indent: true
---
# assert

Assert given expressions are true.

## Parameters

```yaml
that:
  type: list
  required: true
  description: |
    A list of string expressions of the same form that can be passed to the
    'when' statement.
```

## Example

```yaml
- assert:
    that:
      - boo is defined
      - 1 + 1 == 2
      - env.MY_VAR is defined
```