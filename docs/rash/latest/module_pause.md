---
title: pause
weight: 6330
indent: true
---

{% raw %}
# pause

Pause execution for a given duration.

This module is useful for debugging, rate limiting, or waiting for
external processes that don't have a clear signal.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                               |
|-----------|----------|---------|--------|-------------------------------------------|
| minutes   |          | integer |        | Number of minutes to pause.               |
| prompt    |          | string  |        | Optional message to display during pause. |
| seconds   |          | integer |        | Number of seconds to pause.               |

## Example

```yaml
- pause:
    seconds: 5

- pause:
    minutes: 1

- pause:
    seconds: 30
    prompt: "Waiting for service to start..."
```

{% endraw %}