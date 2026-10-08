---
title: openssl_certificate
weight: 5128
indent: true
---

{% raw %}
# openssl_certificate

Generate and manage SSL/TLS certificates.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values     | Description                                                                      |
|-----------------|----------|---------|------------|----------------------------------------------------------------------------------|
| path            | true     | string  |            | Absolute path to the certificate file.                                           |
| privatekey_path | true     | string  |            | Path to the private key file.                                                    |
| common_name     | true     | string  |            | Common Name (CN) for the certificate.                                            |
| provider        |          | string  | selfsigned | Name of the provider to use. **[default: `"selfsigned"`]**                       |
| valid_in        |          | integer |            | Number of days the certificate is valid. **[default: `365`]**                    |
| mode            |          | string  |            | Permissions of the certificate file.                                             |
| owner           |          | string  |            | Owner of the certificate file (name, not UID).                                   |
| group           |          | string  |            | Group of the certificate file (name, not GID).                                   |
| force           |          | boolean |            | Whether to force regeneration even if certificate exists. **[default: `false`]** |

## Examples

```yaml
- name: Generate self-signed certificate
  openssl_certificate:
    path: /etc/ssl/certs/server.crt
    privatekey_path: /etc/ssl/private/server.key
    common_name: example.com
    provider: selfsigned
    valid_in: 365

- name: Generate self-signed certificate with custom settings
  openssl_certificate:
    path: /etc/ssl/certs/server.crt
    privatekey_path: /etc/ssl/private/server.key
    common_name: example.com
    provider: selfsigned
    valid_in: 365
    mode: "0644"
```

{% endraw %}