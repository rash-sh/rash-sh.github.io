---
title: openssl_privatekey
weight: 5860
indent: true
---

{% raw %}
# openssl_privatekey

Generate SSL/TLS private keys.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                                           |
|-----------|----------|---------|-------------------|---------------------------------------------------------------------------------------|
| force     |          | boolean |                   | Force regeneration even if key exists. **[default: `false`]                           |
| group     |          | string  |                   | Group of the private key file (numeric gid or group name).                            |
| mode      |          | string  |                   | Permissions of the private key file.                                                  |
| owner     |          | string  |                   | Owner of the private key file (numeric uid or username).                              |
| path      | true     | string  |                   | Path to write the private key file.                                                   |
| size      |          | integer |                   | Key size in bits. **[default: `4096`]                                                 |
| state     |          | string  | present<br>absent | State of the private key. If _absent_, removes the key file. **[default: `"present"`] |
| type      |          | string  | RSA<br>ECC        | Key type: RSA or ECC. **[default: `"RSA"`]                                            |

## Examples

```yaml
- name: Generate RSA private key
  openssl_privatekey:
    path: /etc/ssl/private/server.key
    size: 4096

- name: Generate ECC private key
  openssl_privatekey:
    path: /etc/ssl/private/server.key
    type: ECC

- name: Generate key with custom permissions
  openssl_privatekey:
    path: /etc/ssl/private/server.key
    size: 2048
    mode: "0600"
```

{% endraw %}