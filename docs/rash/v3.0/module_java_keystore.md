---
title: java_keystore
weight: 5087
indent: true
---

{% raw %}
# java_keystore

Manage Java keystores for SSL/TLS certificate management.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values            | Description                                                               |
|-----------------|----------|---------|-------------------|---------------------------------------------------------------------------|
| path            | true     | string  |                   | Path to the keystore file.                                                |
| password        | true     | string  |                   | Password for the keystore.                                                |
| state           |          | string  | present<br>absent | Whether the entry should be present or absent. **[default: `"present"`]** |
| alias           |          | string  |                   | Alias for the certificate in the keystore.                                |
| certificate     |          | string  |                   | Path to the certificate file (PEM format).                                |
| private_key     |          | string  |                   | Path to the private key file (PEM format).                                |
| cacert_chain    |          | array   |                   | List of CA certificate chain files (PEM format).                          |
| pkcs12_path     |          | string  |                   | Path to a PKCS12 file to import.                                          |
| pkcs12_password |          | string  |                   | Password for the PKCS12 file.                                             |
| force           |          | boolean |                   | Force overwrite existing entry with same alias.                           |

## Examples

```yaml
- name: Import certificate into keystore
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    certificate: /etc/ssl/cert.pem
    private_key: /etc/ssl/key.pem
    alias: myapp

- name: Import certificate with CA chain
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    certificate: /etc/ssl/cert.pem
    private_key: /etc/ssl/key.pem
    alias: myapp
    cacert_chain:
      - /etc/ssl/ca-intermediate.pem
      - /etc/ssl/ca-root.pem

- name: Import PKCS12 file into keystore
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    pkcs12_path: /etc/ssl/bundle.p12
    pkcs12_password: pkcs12secret
    alias: myapp

- name: Remove certificate from keystore
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    alias: oldcert
    state: absent

- name: Create empty keystore
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    state: present

- name: Import certificate with force overwrite
  java_keystore:
    path: /etc/ssl/keystore.jks
    password: secret
    certificate: /etc/ssl/newcert.pem
    private_key: /etc/ssl/newkey.pem
    alias: myapp
    force: true
```

{% endraw %}