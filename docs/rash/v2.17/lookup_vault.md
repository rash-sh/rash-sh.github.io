---
title: vault
weight: 9600
indent: true
---

{% raw %}
# vault

Retrieve secrets from HashiCorp's Vault.

## Parameters

| Parameter      | Required | Type    | Values                              | Description                                                                         |
| -------------- | -------- | ------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| secret         | yes      | string  |                                     | Vault path to the secret being requested in the format `path[:field]`             |
| url            | no       | string  |                                     | URL to the Vault service. **[default: `VAULT_ADDR` env var]**                     |
| token          | no       | string  |                                     | Vault token. **[default: `VAULT_TOKEN` env var]**                                 |
| mount          | no       | string  |                                     | Vault mount point for the secret engine. **[default: `secret`]**                  |
| auth_method    | no       | string  | token, userpass, approle, jwt, none | Authentication method. **[default: `token`]**                                      |
| username       | no       | string  |                                     | Username for userpass authentication                                               |
| password       | no       | string  |                                     | Password for userpass authentication                                               |
| role_id        | no       | string  |                                     | Role ID for approle authentication                                                 |
| secret_id      | no       | string  |                                     | Secret ID for approle authentication                                               |
| jwt            | no       | string  |                                     | JWT token for jwt authentication                                                   |
| namespace      | no       | string  |                                     | Vault namespace (Enterprise feature)                                               |
| validate_certs | no       | boolean |                                     | Validate SSL certificates. **[default: `true`]**                                  |
| timeout        | no       | integer |                                     | Request timeout in seconds                                                         |
| return_format  | no       | string  | dict, values, raw                   | How to return multiple key/value pairs. **[default: `dict`]**                     |
| token_validate | no       | boolean |                                     | Validate token before use. **[default: `false`]**                                 |

## Notes

- The secret path format is `path[:field]`. If no field is specified, returns all secret data as a dict.
- For KV v2, the path should include `data` between the mount and path (e.g., `secret/data/myapp`).
- Environment variables `VAULT_ADDR` and `VAULT_TOKEN` are used if URL and token are not provided.
- Supports multiple authentication methods: token, userpass, approle, jwt, and none.
- The `return_format` parameter controls how secrets are returned:
  - `dict`: Returns key/value pairs as a dictionary (default)
  - `values`: Returns only the values as a list
  - `raw`: Returns the complete API response including metadata


## Example

```yaml
# Basic token authentication
- name: Get specific field from secret
  debug:
    msg: "Password: {{ vault('myapp/database:password') }}"

- name: Get all fields from secret as dict
  debug:
    msg: "Config: {{ vault('myapp/config') }}"

# Username/password authentication
- name: Userpass auth
  debug:
    msg: "Secret: {{ vault('myapp/secret:value', auth_method='userpass', username='myuser', password='mypass') }}"

# AppRole authentication
- name: AppRole auth
  debug:
    msg: "API Key: {{ vault('api/keys:token', auth_method='approle', role_id='role123', secret_id='secret456') }}"

# JWT authentication
- name: JWT auth
  debug:
    msg: "Data: {{ vault('myapp/data', auth_method='jwt', jwt='eyJ...', role_id='myrole') }}"

# Return formats
- name: Get only values as list
  debug:
    msg: "Values: {{ vault('myapp/config', return_format='values') }}"

- name: Get raw API response
  debug:
    msg: "Raw: {{ vault('myapp/config', return_format='raw') }}"

# Vault Enterprise namespace
- name: Use namespace
  debug:
    msg: "Secret: {{ vault('myapp/secret:value', namespace='team-a') }}"

- name: Use custom vault server
  debug:
    msg: "API Key: {{ vault('api/keys:token', url='https://vault.company.com', token='hvs.xxx') }}"

- name: KV v2 path example
  debug:
    msg: "Secret: {{ vault('secret/data/myapp:password') }}"
```

{% endraw %}