---
title: vault_secret
weight: 5190
indent: true
---

{% raw %}
# vault_secret

Read, write, and delete secrets from HashiCorp Vault with granular
secret operations supporting both KV v1 and v2 engines.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                    | Description                                                                                 |
|----------------|----------|---------|---------------------------|---------------------------------------------------------------------------------------------|
| engine         |          | string  |                           | The secrets engine type.                                                                    |
| mount          |          | string  |                           | The mount point for the secrets engine.                                                     |
| namespace      |          | string  |                           | The Vault namespace (Enterprise feature).                                                   |
| path           | true     | string  |                           | The path to the secret in Vault.                                                            |
| secret         |          | object  |                           | The secret data to write (required for state=present).                                      |
| state          |          | string  | read<br>present<br>absent | The desired state of the secret.                                                            |
| token          |          | string  |                           | The Vault token for authentication. If not provided, uses VAULT_TOKEN environment variable. |
| url            |          | string  |                           | The URL of the Vault server. If not provided, uses VAULT_ADDR environment variable.         |
| validate_certs |          | boolean |                           | Validate SSL certificates.                                                                  |
| version        |          | integer |                           | The KV secrets engine version (1 or 2).                                                     |

## Examples

```yaml
- name: Read secret from Vault
  vault_secret:
    path: secret/data/myapp/config
    state: read
    url: "http://vault:8200"
    token: "{{ vault_token }}"
  register: app_secrets

- name: Write secret to Vault
  vault_secret:
    path: secret/data/myapp/config
    state: present
    url: "http://vault:8200"
    token: "{{ vault_token }}"
    secret:
      username: admin
      password: "{{ db_password }}"

- name: Delete secret from Vault
  vault_secret:
    path: secret/data/myapp/config
    state: absent
    url: "http://vault:8200"
    token: "{{ vault_token }}"

- name: Read secret from KV v1 engine
  vault_secret:
    path: kv/myapp/config
    state: read
    version: 1
    url: "http://vault:8200"
    token: "{{ vault_token }}"
  register: kv1_secrets

- name: Write secret using environment variables
  vault_secret:
    path: secret/data/myapp/config
    state: present
    secret:
      api_key: "{{ api_key }}"
```

{% endraw %}