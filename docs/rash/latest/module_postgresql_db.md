---
title: postgresql_db
weight: 6150
indent: true
---

{% raw %}
# postgresql_db

Add or remove PostgreSQL databases.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values                               | Description                                                       |
|-------------------|----------|---------|--------------------------------------|-------------------------------------------------------------------|
| encoding          |          | string  |                                      | Encoding of the database.                                         |
| lc_collate        |          | string  |                                      | Collation order (LC_COLLATE) to use in the database.              |
| lc_ctype          |          | string  |                                      | Character classification (LC_CTYPE) to use in the database.       |
| login_host        |          | string  |                                      | Host running the database.                                        |
| login_password    |          | string  |                                      | The password to authenticate with.                                |
| login_unix_socket |          | string  |                                      | Path to a Unix domain socket for local connections.               |
| login_user        |          | string  |                                      | The username to authenticate with.                                |
| name              | true     | string  |                                      | Name of the database to add or remove.                            |
| owner             |          | string  |                                      | Name of the role to set as owner of the database.                 |
| port              |          | integer |                                      | Database port to connect to.                                      |
| ssl_mode          |          | string  |                                      | Disable SSL certificate verification.                             |
| state             |          | string  | present<br>absent<br>dump<br>restore | The database state.                                               |
| target            |          | string  |                                      | File to backup or restore database.                               |
| target_opts       |          | string  |                                      | Additional arguments to pass to pg_dump/psql during dump/restore. |
| template          |          | string  |                                      | Template used to create the database.                             |

## Examples

```yaml
- name: Create a new database with name "myapp"
  postgresql_db:
    name: myapp
    state: present

- name: Create a new database with owner and encoding
  postgresql_db:
    name: myapp
    state: present
    owner: appuser
    encoding: UTF-8

- name: Dump database to a file
  postgresql_db:
    name: myapp
    state: dump
    target: /tmp/myapp.sql

- name: Dump database in custom format
  postgresql_db:
    name: myapp
    state: dump
    target: /tmp/myapp.dump
    target_opts: "-Fc"

- name: Restore database from a file
  postgresql_db:
    name: myapp
    state: restore
    target: /tmp/myapp.sql

- name: Drop database
  postgresql_db:
    name: myapp
    state: absent

- name: Connect to remote database
  postgresql_db:
    name: myapp
    state: present
    login_host: db.example.com
    login_user: admin
    login_password: secret
    port: 5432
```

{% endraw %}