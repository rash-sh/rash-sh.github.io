---
title: postgresql_query
weight: 5144
indent: true
---

{% raw %}
# postgresql_query

Execute SQL queries against PostgreSQL databases.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values | Description                                                   |
|--------------------|----------|---------|--------|---------------------------------------------------------------|
| database           |          | string  |        | Database name to connect to. **[default: `"postgres"`]**      |
| login_host         |          | string  |        | Host running the database. **[default: `"localhost"`]**       |
| login_password     |          | string  |        | The password to authenticate with.                            |
| login_port         |          | integer |        | Database port to connect to. **[default: `5432`]**            |
| login_unix_socket  |          | string  |        | Path to a Unix domain socket for local connections.           |
| login_user         |          | string  |        | The username to authenticate with.                            |
| query              | true     | string  |        | SQL query to execute.                                         |
| single_transaction |          | boolean |        | Execute query in a single transaction. **[default: `false`]** |
| ssl_cert           |          | string  |        | Path to SSL client certificate.                               |
| ssl_key            |          | string  |        | Path to SSL client key.                                       |
| ssl_mode           |          | string  |        | SSL mode for the connection.                                  |

## Examples

```yaml
- name: Create application schema
  postgresql_query:
    database: myapp
    query: "CREATE SCHEMA app_schema"
    login_user: postgres
    login_password: "{{ pg_pass }}"

- name: Run migration script
  postgresql_query:
    database: myapp
    query: "{{ lookup('file', 'migrations/v1.sql') }}"
    login_user: appuser
    login_password: "{{ app_pass }}"

- name: Create extension
  postgresql_query:
    database: myapp
    query: "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""
    login_user: postgres

- name: Query with SSL
  postgresql_query:
    database: myapp
    query: "SELECT * FROM users LIMIT 10"
    login_host: db.example.com
    login_user: admin
    login_password: secret
    ssl_mode: require

- name: Query using unix socket
  postgresql_query:
    database: myapp
    query: "SELECT version()"
    login_user: postgres
    login_unix_socket: /var/run/postgresql
```

{% endraw %}