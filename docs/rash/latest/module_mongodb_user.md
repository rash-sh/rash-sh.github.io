---
title: mongodb_user
weight: 6090
indent: true
---

{% raw %}
# mongodb_user

Manage MongoDB users and permissions.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values             | Description                                                              |
|-----------------|----------|---------|--------------------|--------------------------------------------------------------------------|
| database        |          | string  |                    | The database where the user is created/managed. **[default: `"admin"`]** |
| login_database  |          | string  |                    | Authentication database to use for login.                                |
| login_host      |          | string  |                    | The host running MongoDB. **[default: `"localhost"`]**                   |
| login_password  |          | string  |                    | The password for login_user.                                             |
| login_port      |          | integer |                    | The port MongoDB is listening on. **[default: `27017`]**                 |
| login_user      |          | string  |                    | The MongoDB user to login with (must have userAdmin privileges).         |
| name            | true     | string  |                    | The username of the MongoDB user to manage.                              |
| password        |          | string  |                    | The password for the MongoDB user.                                       |
| roles           |          |         |                    | The roles assigned to the user. Can be a single role or a list of roles. |
| state           |          | string  | present<br>absent  | The desired state of the user. **[default: `"present"`]**                |
| update_password |          | string  | always<br>oncreate | Whether to update existing user password/roles. **[default: `true`]**    |

## Examples

```yaml
- name: Create MongoDB user
  mongodb_user:
    name: app_user
    password: secret
    database: myapp
    roles: readWrite
    state: present

- name: Create MongoDB user with multiple roles
  mongodb_user:
    name: admin_user
    password: secret
    database: admin
    roles:
      - userAdminAnyDatabase
      - readWriteAnyDatabase
    state: present

- name: Create user on remote MongoDB server
  mongodb_user:
    name: app_user
    password: secret
    database: myapp
    roles: readWrite
    login_host: mongo.example.com
    login_port: 27017
    login_user: admin
    login_password: admin_secret

- name: Drop MongoDB user
  mongodb_user:
    name: app_user
    database: myapp
    state: absent
```

{% endraw %}