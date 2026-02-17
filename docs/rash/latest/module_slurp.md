---
title: slurp
weight: 6230
indent: true
---

{% raw %}
# slurp

This module reads a file and returns its content base64 encoded.
Useful for reading files (including binary) for use in templates or registering variables.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type   | Values | Description       |
|-----------|----------|--------|--------|-------------------|
| src       | true     | string |        | The file to read. |

## Example

```yaml
- name: Read SSL certificate
  slurp:
    src: /etc/ssl/certs/app.crt
  register: cert_content

- name: Display certificate info
  debug:
    msg: "Certificate: {{ cert_content.content | b64decode }}"

- name: Read JSON config
  slurp:
    src: /etc/app/config.json
  register: config_raw
```

{% endraw %}