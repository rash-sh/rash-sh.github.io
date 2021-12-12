---
title: command
weight: 4100
indent: true
---

{% raw %}
# command

Execute commands.

## Parameters

```yaml
argv:
  type: list
  description: |
    Passes the command arguments as a list rather than a string.
    Only the string or the list form can be provided, not both.
cmd:
  type: string
  description: The command to run.
transfer_pid_1:
  type: bool
  description: |
    Execute command as PID 1.
    Note: from this point on, your rash script execution is transfered to the command.
```
## Example

```yaml
- command:
    argv:
      - echo
      - "Hellow World"'
    transfer_pid_1: true
```
{% endraw %}