---
title: command
weight: 5100
indent: true
---

{% raw %}
# command

Execute commands.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter      | Required | Type    | Values | Description                                                                                                  |
|----------------|----------|---------|--------|--------------------------------------------------------------------------------------------------------------|
| transfer_pid_1 |          | boolean |        | Execute command as PID 1. Note: from this point on, your rash script execution is transferred to the command |

## Example

```yaml
- command:
    argv:
      - echo
      - "Hellow World"
    transfer_pid_1: true
```

{% endraw %}