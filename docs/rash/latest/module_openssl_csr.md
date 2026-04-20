---
title: openssl_csr
weight: 5990
indent: true
---

{% raw %}
# openssl_csr

Generate Certificate Signing Requests (CSRs).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter                | Required | Type   | Values | Description                                                                                                                                                     |
|--------------------------|----------|--------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| common_name              |          | string |        | Common Name (CN) for the certificate subject.                                                                                                                   |
| country_name             |          | string |        | Country Name (C) for the certificate subject (2-letter code).                                                                                                   |
| email_address            |          | string |        | Email Address for the certificate subject.                                                                                                                      |
| key_usage                |          | array  |        | Key Usage extensions for the certificate. Valid values: digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign |
| locality_name            |          | string |        | Locality Name (L) for the certificate subject (city).                                                                                                           |
| organization_name        |          | string |        | Organization Name (O) for the certificate subject (company).                                                                                                    |
| organizational_unit_name |          | string |        | Organizational Unit Name (OU) for the certificate subject (department).                                                                                         |
| path                     | true     | string |        | Path to write the CSR to.                                                                                                                                       |
| privatekey_passphrase    |          | string |        | Passphrase for the private key if it is encrypted.                                                                                                              |
| privatekey_path          | true     | string |        | Path to the private key to use for signing the CSR.                                                                                                             |
| state_or_province_name   |          | string |        | State or Province Name (ST) for the certificate subject.                                                                                                        |
| subject_alt_name         |          | array  |        | Subject Alternative Name entries. Format: TYPE:value (e.g., DNS:example.com, IP:192.168.1.1)                                                                    |

## Example

```yaml
- name: Generate CSR
  openssl_csr:
    path: /etc/ssl/server.csr
    privatekey_path: /etc/ssl/private/server.key
    common_name: example.com
    country_name: US
    organization_name: Example Corp
    subject_alt_name:
      - DNS:example.com
      - DNS:www.example.com

- name: Generate CSR with key usage
  openssl_csr:
    path: /etc/ssl/server.csr
    privatekey_path: /etc/ssl/private/server.key
    common_name: example.com
    key_usage:
      - digitalSignature
      - keyEncipherment
```

{% endraw %}