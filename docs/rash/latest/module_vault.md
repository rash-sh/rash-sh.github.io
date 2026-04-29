---
title: vault
weight: 5188
indent: true
---

{% raw %}
# vault

Interact with HashiCorp Vault for secrets management.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                    | Description                                                                                 |
|----------------|----------|---------|---------------------------|---------------------------------------------------------------------------------------------|
| data           |          | object  |                           | The secret data to write (required for state=present).                                      |
| engine         |          | string  | v2<br>v1                  | The KV secrets engine version.                                                              |
| mount          |          | string  |                           | The mount point for the secrets engine.                                                     |
| namespace      |          | string  |                           | The Vault namespace (Enterprise feature).                                                   |
| path           | true     | string  |                           | The path to the secret in Vault.                                                            |
| state          |          | string  | read<br>present<br>absent | The desired state of the secret.                                                            |
| token          |          | string  |                           | The Vault token for authentication. If not provided, uses VAULT_TOKEN environment variable. |
| url            |          | string  |                           | The URL of the Vault server. If not provided, uses VAULT_ADDR environment variable.         |
| validate_certs |          | boolean |                           | Validate SSL certificates.                                                                  |

## Examples

```yaml
- name: Read secret from Vault
  vault:
    path: secret/data/myapp
    url: https://vault.example.com
    token: '{{ vault_token }}'
    state: read
  register: secret_data

- name: Write secret to Vault
  vault:
    path: secret/data/myapp
    url: https://vault.example.com
    token: '{{ vault_token }}'
    data:
      username: admin
      password: '{{ db_password }}'
    state: present

- name: Delete secret
  vault:
    path: secret/data/oldapp
    url: https://vault.example.com
    token: '{{ vault_token }}'
    state: absent

- name: Read secret with namespace (Vault Enterprise)
  vault:
    path: secret/data/myapp
    url: https://vault.example.com
    token: '{{ vault_token }}'
    namespace: team-a
    state: read
  register: secret_data

- name: Write to KV v1 engine
  vault:
    path: kv/myapp
    url: https://vault.example.com
    token: '{{ vault_token }}'
    engine: v1
    data:
      key: value
    state: present

- name: Use environment variables for connection
  vault:
    path: secret/data/myapp
    state: read
  register: secret_data
```

{% endraw %}