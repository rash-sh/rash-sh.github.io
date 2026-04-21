---
title: consul_kv
weight: 5280
indent: true
---

{% raw %}
# consul_kv

Manage Consul key-value store entries.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                    | Description                                      |
|----------------|----------|---------|---------------------------|--------------------------------------------------|
| dc             |          | string  |                           | The datacenter to use.                           |
| host           |          | string  |                           | The Consul host.                                 |
| key            | true     | string  |                           | The key path in Consul KV store.                 |
| ns             |          | string  |                           | The namespace (Consul Enterprise).               |
| port           |          | integer |                           | The Consul port.                                 |
| recurse        |          | boolean |                           | Recursively delete keys (only for state=absent). |
| state          |          | string  | read<br>present<br>absent | The desired state of the key.                    |
| token          |          | string  |                           | ACL token for authentication.                    |
| validate_certs |          | boolean |                           | Validate SSL certificates.                       |
| value          |          | string  |                           | The value to set (required for state=present).   |

## Examples

```yaml
- name: Set a key in Consul KV store
  consul_kv:
    key: myapp/config/database_url
    value: postgres://localhost:5432/mydb
    state: present

- name: Get a key from Consul KV store
  consul_kv:
    key: myapp/config/database_url
    state: read
  register: result

- name: Delete a key
  consul_kv:
    key: myapp/config/old_setting
    state: absent

- name: Delete keys recursively
  consul_kv:
    key: myapp/old_feature
    state: absent
    recurse: true

- name: Set key with custom Consul server
  consul_kv:
    key: myapp/config/api_key
    value: secret123
    host: consul-server.example.com
    port: 8500
    state: present

- name: Set key with ACL token
  consul_kv:
    key: secure/config/password
    value: '{{ vault_password }}'
    token: '{{ consul_token }}'
    state: present

- name: Set key in specific datacenter
  consul_kv:
    key: myapp/config/setting
    value: production
    dc: dc2
    state: present
```

{% endraw %}