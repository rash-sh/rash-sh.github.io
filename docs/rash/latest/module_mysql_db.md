---
title: mysql_db
weight: 6130
indent: true
---

{% raw %}
# mysql_db

Manage MySQL/MariaDB databases.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values                              | Description                                                                             |
|--------------------|----------|---------|-------------------------------------|-----------------------------------------------------------------------------------------|
| collation          |          | string  |                                     | The database collation.                                                                 |
| config_file        |          | string  |                                     | MySQL config file to read credentials from.                                             |
| encoding           |          | string  |                                     | The database encoding. **[default: `"utf8"`]**                                          |
| login_host         |          | string  |                                     | Database host to connect to. **[default: `"localhost"`]**                               |
| login_password     |          | string  |                                     | Database password to use.                                                               |
| login_port         |          | integer |                                     | Database port to connect to. **[default: `3306`]**                                      |
| login_user         |          | string  |                                     | Database user to connect with.                                                          |
| name               | true     | string  |                                     | Name of the database to manage.                                                         |
| quick              |          | boolean |                                     | Use quick option for dump (retrieve rows one at a time). **[default: `true` for dump]** |
| single_transaction |          | boolean |                                     | Use single transaction for dump (no table locking). **[default: `true` for dump]**      |
| state              |          | string  | present<br>absent<br>dump<br>import | The database state. **[default: `"present"`]**                                          |
| target             |          | string  |                                     | File to dump/import database to/from (required for dump/import states).                 |

## Example

```yaml
- name: Create database
  mysql_db:
    name: myapp
    state: present
    encoding: utf8mb4
    collation: utf8mb4_unicode_ci

- name: Create database with specific credentials
  mysql_db:
    name: myapp
    state: present
    login_user: root
    login_password: secret
    login_host: localhost
    login_port: 3306

- name: Dump database to file
  mysql_db:
    name: myapp
    state: dump
    target: /backup/myapp.sql

- name: Import database from file
  mysql_db:
    name: myapp
    state: import
    target: /backup/myapp.sql

- name: Drop database
  mysql_db:
    name: oldapp
    state: absent
```

{% endraw %}