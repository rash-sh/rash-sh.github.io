---
title: sshd_config
weight: 6540
indent: true
---

{% raw %}
# sshd_config

Manage SSH server configuration in /etc/ssh/sshd_config.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values            | Description                                                                                                                  |
|----------------|----------|---------|-------------------|------------------------------------------------------------------------------------------------------------------------------|
| backup         |          | boolean |                   | Create a backup file before making changes. **[default: `false`]**                                                           |
| match_criteria |          | string  |                   | Match block criteria (e.g., "User admin", "Group ssh-users"). When specified, the option is managed within this Match block. |
| option         | true     | string  |                   | The SSH server configuration option name.                                                                                    |
| path           |          | string  |                   | Path to the sshd_config file. **[default: `"/etc/ssh/sshd_config"`]**                                                        |
| state          |          | string  | present<br>absent | Whether the option should be present or absent. **[default: `"present"`]**                                                   |
| validate       |          | boolean |                   | Validate configuration with sshd -t before applying. **[default: `false`]**                                                  |
| value          |          | string  |                   | The value to set for the option. Required when state=present.                                                                |

## Examples

```yaml
- name: Set SSH port
  sshd_config:
    option: Port
    value: "22"

- name: Disable root login
  sshd_config:
    option: PermitRootLogin
    value: "no"

- name: Disable password authentication
  sshd_config:
    option: PasswordAuthentication
    value: "no"

- name: Remove an option
  sshd_config:
    option: PermitRootLogin
    state: absent

- name: Configure option within Match block
  sshd_config:
    option: PasswordAuthentication
    value: "yes"
    match_criteria: User admin

- name: Set multiple options in custom path
  sshd_config:
    option: MaxAuthTries
    value: "3"
    path: /etc/ssh/sshd_config.d/custom.conf
    validate: true

- name: Create backup before change
  sshd_config:
    option: PermitRootLogin
    value: "no"
    backup: true
```

{% endraw %}