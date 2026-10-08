---
title: pause
weight: 5138
indent: true
---

{% raw %}
# pause

Pause execution for a duration or prompt a human for input. Human input is returned as the
module output and can be captured with `register`. With `echo: false` the input is never
logged.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                                                           |
|-----------|----------|---------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| seconds   |          | integer |        | Number of seconds to pause.                                                                                                           |
| minutes   |          | integer |        | Number of minutes to pause.                                                                                                           |
| prompt    |          | string  |        | Optional message to display.                                                                                                          |
| input     |          | boolean |        | Read one line of input after displaying the prompt and return it as the task output. Without a terminal, the line is read from stdin. |
| echo      |          | boolean |        | Echo the typed input. Set false for passwords/secrets: the input is then never logged.                                                |

## Example

```yaml
- pause:
    seconds: 5

- pause:
    prompt: "Environment name: "
    input: true
  register: answer

- pause:
    prompt: "Password: "
    input: true
    echo: false
  register: password
```

{% endraw %}