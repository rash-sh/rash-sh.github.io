---
title: assert
weight: 4200
indent: true
---

{% raw %}
# assert

Assert given expressions are true.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type  | Values | Description                                                                               |
|-----------|----------|-------|--------|-------------------------------------------------------------------------------------------|
| that      | true     | array |        | A list of string expressions of the same form that can be passed to the _when_ statement. |

## Example

```yaml
- assert:
    that:
      - boo is defined
      - 1 + 1 == 2
      - env.MY_VAR is defined
```

{% endraw %}