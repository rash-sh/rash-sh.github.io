---
title: mysql_query
weight: 6130
indent: true
---

{% raw %}
# mysql_query

Execute SQL queries against MySQL/MariaDB databases.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values | Description                                                   |
|--------------------|----------|---------|--------|---------------------------------------------------------------|
| config_file        |          | string  |        | MySQL config file to read credentials from.                   |
| database           |          | string  |        | Database name to connect to.                                  |
| login_host         |          | string  |        | Database host to connect to. **[default: `"localhost"`]**     |
| login_password     |          | string  |        | Database password to use.                                     |
| login_port         |          | integer |        | Database port to connect to. **[default: `3306`]**            |
| login_unix_socket  |          | string  |        | Unix socket path to connect to.                               |
| login_user         |          | string  |        | Database user to connect with.                                |
| query              | true     | string  |        | SQL query to execute.                                         |
| single_transaction |          | boolean |        | Execute query in a single transaction. **[default: `false`]** |

{$include_doc /// ## Example
///
/// ```yaml
/// - name: Create application user
///   mysql_query:
///     query: "CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'secret'"
///     login_user: root
///     login_password: "{{ mysql_root_pass }}"
///
/// - name: Grant permissions
///   mysql_query:
///     database: myapp
///     query: "GRANT ALL ON myapp.* TO 'appuser'@'localhost'"
///     login_user: root
///     login_password: "{{ mysql_root_pass }}"
///
/// - name: Run migration script
///   mysql_query:
///     database: myapp
///     query: "{{ lookup('file', 'migrations/v1.sql') }}"
///     login_user: appuser
///     login_password: "{{ app_pass }}"
///     single_transaction: true
///
/// - name: Query with unix socket
///   mysql_query:
///     query: "SELECT * FROM users LIMIT 10"
///     database: myapp
///     login_user: root
///     login_unix_socket: /var/run/mysqld/mysqld.sock
/// ```}

{% endraw %}