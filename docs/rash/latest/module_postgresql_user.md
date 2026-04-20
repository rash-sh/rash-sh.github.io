---
title: postgresql_user
weight: 6100
indent: true
---

{% raw %}
# postgresql_user

Add or remove PostgreSQL users (roles).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values            | Description                                         |
|-------------------|----------|---------|-------------------|-----------------------------------------------------|
| encrypted         |          | boolean |                   | Whether the password is already encrypted.          |
| login_host        |          | string  |                   | Host running the database.                          |
| login_password    |          | string  |                   | The password to authenticate with.                  |
| login_unix_socket |          | string  |                   | Path to a Unix domain socket for local connections. |
| login_user        |          | string  |                   | The username to authenticate with.                  |
| name              | true     | string  |                   | Name of the user (role) to add or remove.           |
| password          |          | string  |                   | Password for the user.                              |
| port              |          | integer |                   | Database port to connect to.                        |
| role_attr_flags   |          | string  |                   | Role attributes flags.                              |
| ssl_mode          |          | string  |                   | Disable SSL certificate verification.               |
| state             |          | string  | present<br>absent | The user state.                                     |

## Examples

```yaml
- name: Create a new user with password
  postgresql_user:
    name: app_user
    password: secret
    state: present

- name: Create a user with specific role attributes
  postgresql_user:
    name: app_admin
    password: admin_password
    role_attr_flags: CREATEDB,NOSUPERUSER
    state: present

- name: Create a superuser
  postgresql_user:
    name: admin_user
    password: admin_secret
    role_attr_flags: SUPERUSER
    state: present

- name: Remove a user
  postgresql_user:
    name: old_user
    state: absent

- name: Connect to remote database and create user
  postgresql_user:
    name: remote_user
    password: remote_pass
    login_host: db.example.com
    login_user: admin
    login_password: secret
    port: 5432
    state: present
```

{% endraw %}