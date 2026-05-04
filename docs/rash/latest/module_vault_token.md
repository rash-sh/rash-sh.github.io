---
title: vault_token
weight: 5191
indent: true
---

{% raw %}
# vault_token

Manage HashiCorp Vault tokens - create, renew, revoke, and lookup tokens.
Complements the existing vault module for complete Vault integration.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                               | Description                                                                                                  |
|----------------|----------|---------|--------------------------------------|--------------------------------------------------------------------------------------------------------------|
| display_token  |          | boolean |                                      | Whether to display the token in the output. Defaults to true.                                                |
| meta           |          | object  |                                      | Metadata to associate with the token.                                                                        |
| namespace      |          | string  |                                      | The Vault namespace (Enterprise feature).                                                                    |
| no_parent      |          | boolean |                                      | If true, the token will not have a parent token.                                                             |
| num_uses       |          | integer |                                      | The maximum number of times the token can be used. 0 means unlimited.                                        |
| period         |          | string  |                                      | The period for the token. If set, the token will be a periodic token.                                        |
| policies       |          | array   |                                      | List of policies for the token (required for state=present).                                                 |
| renewable      |          | boolean |                                      | Whether the token is renewable.                                                                              |
| role_name      |          | string  |                                      | The token role name to use when creating the token.                                                          |
| state          |          | string  | present<br>renew<br>lookup<br>absent | The desired state of the token.                                                                              |
| token          |          | string  |                                      | The token to operate on (for lookup, renew, revoke). If not provided, uses VAULT_TOKEN environment variable. |
| ttl            |          | string  |                                      | Time-to-live for the token (e.g., "24h", "48h", "720h").                                                     |
| type_          |          | string  |                                      | The token type (default "default"). Can be "default" or "service".                                           |
| url            |          | string  |                                      | The URL of the Vault server. If not provided, uses VAULT_ADDR environment variable.                          |
| validate_certs |          | boolean |                                      | Validate SSL certificates.                                                                                   |

## Examples

```yaml
- name: Create a Vault token with policies
  vault_token:
    policies:
      - read-only
      - myapp
    ttl: 24h
    state: present
  register: token

- name: Create a token with custom metadata
  vault_token:
    policies:
      - admin
    ttl: 48h
    renewable: true
    meta:
      purpose: ci-cd
      team: platform
    state: present
  register: token

- name: Create a token using a role
  vault_token:
    role_name: my-role
    policies:
      - myapp
    ttl: 1h
    state: present
  register: token

- name: Renew a token
  vault_token:
    token: "{{ token.id }}"
    ttl: 24h
    state: renew

- name: Lookup token info
  vault_token:
    token: "{{ token.id }}"
    state: lookup
  register: token_info

- name: Revoke a token
  vault_token:
    token: "{{ token.id }}"
    state: absent

- name: Use environment variables for connection
  vault_token:
    policies:
      - read-only
    ttl: 1h
    state: present
  register: token
```

{% endraw %}