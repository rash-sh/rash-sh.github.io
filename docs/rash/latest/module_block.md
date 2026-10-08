---
title: block
weight: 5017
indent: true
---

{% raw %}
# block

Group tasks together for execution. The traditional sequence form remains supported. The
mapping form adds `defaults`, which are merged into every child task unless that task overrides
them. `vars` and `environment` maps are merged key-by-key.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

`block` takes either a list of tasks or a mapping:

| Parameter | Required | Type | Values | Description                                                |
| --------- | -------- | ---- | ------ | ---------------------------------------------------------- |
| tasks     | true     | list |        | Tasks to execute.                                          |
| defaults  | false    | map  |        | Task attributes applied to every child task it doesn't set. |

## Example

```yaml
- block:
    - command: echo simple

- block:
    tasks:
      - command: ./migrate
      - command: ./verify
    defaults:
      environment:
        APP_ENV: production
      become: true
```

{% endraw %}