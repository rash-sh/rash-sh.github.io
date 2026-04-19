---
title: selinux
weight: 6170
indent: true
---

{% raw %}
# selinux

Change SELinux policy and modes.

This module manages SELinux configuration and state.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type   | Values                              | Description                |
|-----------|----------|--------|-------------------------------------|----------------------------|
| policy    |          | string | targeted<br>minimum<br>mls          | The SELinux policy to use. |
| state     | true     | string | enforcing<br>permissive<br>disabled | The SELinux mode.          |

## Example

```yaml
- name: Enable SELinux
  selinux:
    policy: targeted
    state: enforcing

- name: Set SELinux to permissive mode
  selinux:
    state: permissive

- name: Disable SELinux
  selinux:
    state: disabled
```

{% endraw %}