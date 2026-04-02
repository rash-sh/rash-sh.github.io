---
title: redis
weight: 5910
indent: true
---

{% raw %}
# redis

Unified utility to interact with Redis instances.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values | Description                                                           |
|----------------|----------|---------|--------|-----------------------------------------------------------------------|
| command        | true     |         |        | The Redis command to execute.                                         |
| db             |          | integer |        | The database number to use.                                           |
| flush_mode     |          |         |        | Type of flush (for flush command).                                    |
| key            |          | string  |        | The key to operate on (for set/get/delete commands).                  |
| login_host     |          | string  |        | The host running Redis.                                               |
| login_password |          | string  |        | The password to authenticate with.                                    |
| login_port     |          | integer |        | The port to connect to.                                               |
| login_user     |          | string  |        | The user to authenticate with.                                        |
| master_host    |          | string  |        | The master host (for replica command).                                |
| master_port    |          | integer |        | The master port (for replica command).                                |
| name           |          | string  |        | Configuration setting name (for config command).                      |
| replica_mode   |          |         |        | The mode for replica command.                                         |
| ttl            |          | integer |        | Whether the key should have an expiry time in seconds.                |
| value          |          | string  |        | The value to set (for set command) or configure (for config command). |

## Example

```yaml
- name: Set a key
  redis:
    command: set
    key: mykey
    value: myvalue

- name: Get a key
  redis:
    command: get
    key: mykey
  register: result

- name: Delete a key
  redis:
    command: delete
    key: mykey

- name: Flush all databases
  redis:
    command: flush
    flush_mode: all

- name: Flush a specific database
  redis:
    command: flush
    flush_mode: db
    db: 1

- name: Configure Redis maxmemory
  redis:
    command: config
    name: maxmemory
    value: 4GB

- name: Set instance as replica
  redis:
    command: replica
    master_host: 192.168.1.100
    master_port: 6379

- name: Set instance as master
  redis:
    command: replica
    replica_mode: master

- name: Connect with authentication
  redis:
    command: get
    key: mykey
    login_host: localhost
    login_port: 6379
    login_password: secret
```

{% endraw %}