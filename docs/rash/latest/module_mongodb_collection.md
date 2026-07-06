---
title: mongodb_collection
weight: 5109
indent: true
---

{% raw %}
# mongodb_collection

Manage MongoDB collections.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values                    | Description                                               |
|--------------------|----------|---------|---------------------------|-----------------------------------------------------------|
| name               | true     | string  |                           | Name of the collection to manage.                         |
| database           | true     | string  |                           | Name of the database containing the collection.           |
| state              |          | string  | present<br>absent         | The collection state. **[default: `"present"`]**          |
| indexes            |          | array   |                           | List of indexes to create on the collection.              |
| validator          |          | object  |                           | Collection validator document.                            |
| validation_level   |          | string  | off<br>strict<br>moderate | Validation level (off/strict/moderate).                   |
| validation_action  |          | string  | error<br>warn             | Validation action (error/warn).                           |
| collation          |          | object  |                           | Collation settings for the collection.                    |
| replica_set        |          | string  |                           | Replica set name (for replica set connections).           |
| login_host         |          | string  |                           | Database host to connect to. **[default: `"localhost"`]** |
| login_user         |          | string  |                           | Database user to connect with.                            |
| login_password     |          | string  |                           | Database password to use.                                 |
| login_port         |          | integer |                           | Database port to connect to. **[default: `27017`]**       |
| connection_options |          | string  |                           | Connection options string.                                |
| auth_database      |          | string  |                           | Authentication database. **[default: `"admin"`]**         |

## Examples

```yaml
- name: Create a collection
  mongodb_collection:
    name: users
    database: myapp
    state: present

- name: Create collection with indexes
  mongodb_collection:
    name: users
    database: myapp
    state: present
    indexes:
      - key: { email: 1 }
        unique: true
      - key: { created_at: -1 
///         name: idx_created_at
///
/// - name: Create collection with validator
///   mongodb_collection:
///     name: users
///     database: myapp
///     state: present
///     validator:
///       $jsonSchema:
///         required: ["email"]
///         properties:
///           email:
///             bsonType: "string"
///     validation_level: strict
///     validation_action: error
///
/// - name: Create collection with collation
///   mongodb_collection:
///     name: users
///     database: myapp
///     state: present
///     collation:
///       locale: en
///       strength: 2
///
/// - name: Drop a collection
///   mongodb_collection:
///     name: logs
///     database: myapp
///     state: absent
/// ```}

{% endraw %}