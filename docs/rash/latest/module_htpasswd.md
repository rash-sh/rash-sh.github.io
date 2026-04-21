---
title: htpasswd
weight: 5630
indent: true
---

{% raw %}
# htpasswd

Manage htpasswd files for HTTP Basic Authentication.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values                   | Description                                                      |
|-----------|----------|--------|--------------------------|------------------------------------------------------------------|
| crypt     |          | string | apr1<br>sha256<br>sha512 | Hash algorithm to use. **[default: `"apr1"`]**                   |
| name      | true     | string |                          | Username to add or remove.                                       |
| password  |          | string |                          | Password for the user. Required when state=present.              |
| path      | true     | string |                          | Path to the htpasswd file.                                       |
| state     |          | string | present<br>absent        | Whether the user should exist or not. **[default: `"present"`]** |

## Examples

```yaml
- name: Add user with apr1 hash
  htpasswd:
    path: /etc/nginx/.htpasswd
    name: admin
    password: secret123
    state: present

- name: Add user with SHA-512 hash
  htpasswd:
    path: /etc/nginx/.htpasswd
    name: admin
    password: secret123
    crypt: sha512
    state: present

- name: Remove user
  htpasswd:
    path: /etc/nginx/.htpasswd
    name: admin
    state: absent
```

{% endraw %}