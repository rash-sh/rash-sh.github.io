---
title: fail
weight: 6120
indent: true
---

{% raw %}
# fail

Fail execution with a custom error message.

This module is useful for explicitly failing execution in conditional
logic to provide meaningful error messages.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type   | Values | Description                   |
|-----------|----------|--------|--------|-------------------------------|
| msg       |          | string |        | The error message to display. |

## Example

```yaml
- name: Check for required config
  stat:
    path: /etc/app/required.conf
  register: config_check

- name: Fail if config missing
  fail:
    msg: "Required configuration file /etc/app/required.conf not found"
  when: not config_check.stat.exists

- name: Fail with templated message
  fail:
    msg: "Unsupported architecture: {{ rash.arch }}"
```

{% endraw %}