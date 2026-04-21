---
title: mongodb_replicaset
weight: 6110
indent: true
---

{% raw %}
# mongodb_replicaset

Manage MongoDB replica sets.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                           | Description                                                      |
|----------------|----------|---------|----------------------------------|------------------------------------------------------------------|
| auth_database  |          | string  |                                  | Authentication database.                                         |
| login_host     |          | string  |                                  | Database host to connect to. **[default: `"localhost"`]**        |
| login_password |          | string  |                                  | Database password to use.                                        |
| login_port     |          | integer |                                  | Database port to connect to. **[default: `27017`]**              |
| login_user     |          | string  |                                  | Database user to connect with.                                   |
| members        |          | array   |                                  | List of replica set members (host:port format).                  |
| repl_set       | true     | string  |                                  | Replica set name.                                                |
| state          |          | string  | present<br>absent<br>initialized | The desired state of the replica set. **[default: `"present"`]** |

## Examples

```yaml
- name: Initialize a replica set
  mongodb_replicaset:
    repl_set: rs0
    state: initialized
    members:
      - mongo1:27017
      - mongo2:27017
      - mongo3:27017
    login_user: admin
    login_password: secret

- name: Initialize replica set on localhost
  mongodb_replicaset:
    repl_set: rs0
    state: initialized
    members:
      - localhost:27017

- name: Add member to replica set
  mongodb_replicaset:
    repl_set: rs0
    state: present
    members:
      - mongo1:27017
      - mongo2:27017
      - mongo3:27017
      - mongo4:27017
    login_user: admin
    login_password: secret

- name: Remove member from replica set
  mongodb_replicaset:
    repl_set: rs0
    state: present
    members:
      - mongo1:27017
      - mongo2:27017
    login_user: admin
    login_password: secret

- name: Check replica set status
  mongodb_replicaset:
    repl_set: rs0
    state: present
    login_user: admin
    login_password: secret
```

{% endraw %}