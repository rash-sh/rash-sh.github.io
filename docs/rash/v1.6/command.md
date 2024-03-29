---
title: command
weight: 5400
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

| Parameter      | Required | Type    | Values | Description                                                                                                              |
|----------------|----------|---------|--------|--------------------------------------------------------------------------------------------------------------------------|
| cmd            |          | string  |        | The command to run.                                                                                                      |
| argv           |          | array   |        | Passes the command arguments as a list rather than a string. Only the string or the list form can be provided, not both. |
| transfer_pid_1 |          | boolean |        | Execute command as PID 1. Note: from this point on, your rash script execution is transferred to the command             |

## Example

```yaml
- command:
    argv:
      - echo
      - "Hellow World"
    transfer_pid_1: true
```

{% endraw %}