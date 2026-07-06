---
title: mysql_replication
weight: 5117
indent: true
---

{% raw %}
# mysql_replication

Manage MySQL/MariaDB replication topology.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values                          | Description                                                             |
|------------------|----------|---------|---------------------------------|-------------------------------------------------------------------------|
| state            |          | string  | present<br>absent<br>getprimary | The replication state. **[default: `"present"`]**                       |
| mode             |          | string  | primary<br>replica              | Whether the server is a primary or replica. **[default: `"primary"`]**  |
| primary_host     |          | string  |                                 | Primary server hostname (required when mode=replica and state=present). |
| primary_user     |          | string  |                                 | Replication user on the primary.                                        |
| primary_password |          | string  |                                 | Replication user password on the primary.                               |
| primary_port     |          | integer |                                 | Primary server port. **[default: `3306`]**                              |
| login_host       |          | string  |                                 | Database host to connect to. **[default: `"localhost"`]**               |
| login_user       |          | string  |                                 | Database user to connect with.                                          |
| login_password   |          | string  |                                 | Database password to use.                                               |
| login_port       |          | integer |                                 | Database port to connect to. **[default: `3306`]**                      |
| config_file      |          | string  |                                 | MySQL config file to read credentials from.                             |

## Example

```yaml
- name: Configure server as primary
  mysql_replication:
    mode: primary
    state: present
    login_user: root
    login_password: "{{ vault_root_password }}"

- name: Configure server as replica
  mysql_replication:
    mode: replica
    state: present
    primary_host: db-primary.internal
    primary_user: repl
    primary_password: "{{ vault_repl_password }}"
    primary_port: 3306
    login_user: root
    login_password: "{{ vault_root_password }}"

- name: Stop replication
  mysql_replication:
    mode: replica
    state: absent
    login_user: root
    login_password: "{{ vault_root_password }}"

- name: Get primary status
  mysql_replication:
    state: getprimary
    login_user: root
    login_password: "{{ vault_root_password }}"
```

{% endraw %}