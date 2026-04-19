---
title: expect
weight: 5420
indent: true
---

{% raw %}
# expect

Execute interactive commands and automate responses.

This module automates interactive CLI programs by spawning a pseudo-terminal
and responding to prompts based on pattern matching.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                                                                              |
|-----------|----------|---------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| command   | true     | string  |        | The command to run with interactive prompts.                                                                                                             |
| echo      |          | boolean |        | Whether to echo the command output to stdout.                                                                                                            |
| responses | true     | object  |        | A dictionary mapping prompt patterns (strings or regex) to their responses. When a pattern is matched in the output, the corresponding response is sent. |
| timeout   |          | integer |        | Maximum time in seconds to wait for each expected pattern.                                                                                               |

## Example

```yaml
- name: Run interactive setup
  expect:
    command: /usr/local/bin/setup-wizard
    responses:
      "Enter password:": "{{ vault_password }}"
      "Confirm (y/n):": "y"
    timeout: 30

- name: Automate SSH key creation
  expect:
    command: ssh-keygen -t rsa -f /tmp/id_rsa
    responses:
      "Enter passphrase": ""
      "Enter same passphrase": ""
    timeout: 10
```

{% endraw %}