---
title: mongodb_db
weight: 5840
indent: true
---

{% raw %}
# mongodb_db

Manage MongoDB databases.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values            | Description                                               |
|--------------------|----------|---------|-------------------|-----------------------------------------------------------|
| auth_database      |          | string  |                   | Authentication database.                                  |
| collection         |          | string  |                   | Collection name to manage within the database.            |
| connection_options |          | string  |                   | Connection options string.                                |
| indexes            |          | array   |                   | List of indexes to create on the collection.              |
| login_host         |          | string  |                   | Database host to connect to. **[default: `"localhost"`]** |
| login_password     |          | string  |                   | Database password to use.                                 |
| login_port         |          | integer |                   | Database port to connect to. **[default: `27017`]**       |
| login_user         |          | string  |                   | Database user to connect with.                            |
| name               | true     | string  |                   | Name of the database to manage.                           |
| replica_set        |          | string  |                   | Replica set name (for replica set connections).           |
| state              |          | string  | present<br>absent | The database/collection state. **[default: `"present"`]** |

## Examples

```yaml
- name: Create a new database with name "myapp"
  mongodb_db:
    name: myapp
    state: present

- name: Create database with specific credentials
  mongodb_db:
    name: myapp
    state: present
    login_user: admin
    login_password: secret
    login_host: mongodb.example.com
    login_port: 27017

- name: Create a collection in database
  mongodb_db:
    name: myapp
    collection: users
    state: present

- name: Create indexes on a collection
  mongodb_db:
    name: myapp
    collection: users
    indexes:
      - key: email
        unique: true
      - key: created_at
        name: idx_created_at

- name: Drop a collection
  mongodb_db:
    name: myapp
    collection: old_data
    state: absent

- name: Drop database
  mongodb_db:
    name: oldapp
    state: absent
```

{% endraw %}