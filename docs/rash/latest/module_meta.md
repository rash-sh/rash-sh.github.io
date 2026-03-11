---
title: meta
weight: 5580
indent: true
---

{% raw %}
# meta

Execute meta-actions during task execution.

This module provides special actions that control the execution flow,
such as flushing handlers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values          | Description                    |
| --------- | -------- | ------ | --------------- | ------------------------------ |
| action    | true     | string | flush_handlers  | The meta action to perform     |

## Example

```yaml
- name: Flush handlers before continuing
  meta:
    action: flush_handlers
```

{% endraw %}