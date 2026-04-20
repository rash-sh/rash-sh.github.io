---
title: sudoers
weight: 6370
indent: true
---

{% raw %}
# sudoers

Manage sudoers configuration entries in /etc/sudoers.d.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values            | Description                                                               |
|--------------|----------|---------|-------------------|---------------------------------------------------------------------------|
| commands     | true     |         |                   | Commands the user/group can run. Can be a single command or list.         |
| name         | true     | string  |                   | Name of the sudoers rule. This becomes the filename in sudoers.d.         |
| nopassword   |          | boolean |                   | Whether to require password for sudo. **[default: `false`]**              |
| setenv       |          | boolean |                   | Allow user to set environment variables with sudo. **[default: `false`]** |
| state        |          | string  | present<br>absent | Whether the rule should be present or absent. **[default: `"present"`]**  |
| sudoers_path |          | string  |                   | Path to the sudoers.d directory. **[default: `"/etc/sudoers.d"`]**        |
| user         | true     | string  |                   | User or group to grant sudo access. Groups should be prefixed with %.     |

## Examples

```yaml
- name: Allow nginx to restart service without password
  sudoers:
    name: nginx-service
    user: nginx
    commands:
      - /usr/sbin/service nginx restart
      - /usr/sbin/service nginx status
    nopassword: true

- name: Allow developers group to run docker commands
  sudoers:
    name: docker-developers
    user: "%developers"
    commands: /usr/bin/docker
    nopassword: true
    setenv: true

- name: Allow specific user to run all commands
  sudoers:
    name: admin-user
    user: adminuser
    commands: ALL

- name: Remove sudoers rule
  sudoers:
    name: deprecated-rule
    user: olduser
    commands: ALL
    state: absent

- name: Custom sudoers path
  sudoers:
    name: custom-rule
    user: myuser
    commands: /usr/local/bin/myapp
    sudoers_path: /etc/sudoers.d
```

{% endraw %}