---
title: mysql_user
weight: 5780
indent: true
---

{% raw %}
# mysql_user

Manage MySQL/MariaDB database users.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values            | Description                                                         |
|----------------|----------|---------|-------------------|---------------------------------------------------------------------|
| config_file    |          | string  |                   | MySQL config file to read credentials from.                         |
| host           |          | string  |                   | Host part of the user. **[default: `"localhost"`]**                 |
| login_host     |          | string  |                   | Database host to connect to. **[default: `"localhost"`]**           |
| login_password |          | string  |                   | Database password to use.                                           |
| login_port     |          | integer |                   | Database port to connect to. **[default: `3306`]**                  |
| login_user     |          | string  |                   | Database user to connect with.                                      |
| name           | true     | string  |                   | Name of the user to add or remove.                                  |
| password       |          | string  |                   | Password for the user.                                              |
| priv           |          | string  |                   | Privileges to grant (format: "db.table:priv1,priv2" or "db.*:ALL"). |
| state          |          | string  | present<br>absent | The user state. **[default: `"present"`]**                          |

## Example

```yaml
- name: Create database user
  mysql_user:
    name: app_user
    password: secret_password
    state: present

- name: Create user with specific host and privileges
  mysql_user:
    name: app_user
    password: secret_password
    host: "%"
    priv: "app_db.*:SELECT,INSERT,UPDATE"
    state: present

- name: Create user with login credentials
  mysql_user:
    login_user: root
    login_password: root_password
    name: app_user
    password: app_password
    state: present

- name: Drop database user
  mysql_user:
    name: old_user
    host: "%"
    state: absent
```

{% endraw %}