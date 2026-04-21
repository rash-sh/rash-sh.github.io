---
title: passwordstore
weight: 6320
indent: true
---

{% raw %}
# passwordstore

Manage passwords using pass (password-store), the standard Unix password manager.

Pass uses GPG for encryption and Git for version control. This module enables
secure credential management in scripts, container entrypoints, and IoT devices.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values            | Description                                                                                                                                      |
|---------------|----------|---------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| generate      |          | boolean |                   | Generate a random password instead of providing one. The generated password will be stored in pass.                                              |
| length        |          | integer |                   | Length of the generated password. Only used with `generate: true`. **[default: `16`]**                                                           |
| password      |          | string  |                   | The password to store. Required for state=present when creating a new entry (unless `generate` is true or `userpass` is provided).               |
| passwordstore |          | string  |                   | Path to the password-store directory. Overrides PASSWORD_STORE_DIR environment variable.                                                         |
| path          | true     | string  |                   | Path to the password in the password store.                                                                                                      |
| returnall     |          | boolean |                   | Return all content from the password entry, not just the first line.                                                                             |
| state         |          | string  | present<br>absent | Whether the password should be present or absent. When present and password exists, returns the password content. **[default: `"present"`]**     |
| userpass      |          | string  |                   | The full content of the password file (multiline). First line is the password, remaining lines are metadata. Mutually exclusive with `password`. |

## Examples

```yaml
- name: Read a password from the store
  passwordstore:
    path: myapp/database
    state: present
  register: db_password

- name: Read all password data (password + metadata)
  passwordstore:
    path: myapp/database
    returnall: true
    state: present
  register: db_full

- name: Create a new password entry
  passwordstore:
    path: myapp/api-key
    password: "{{ api_key }}"
    state: present

- name: Create a password with multiline content
  passwordstore:
    path: myapp/database
    userpass: |
      s3cret_p4ssw0rd
      username: admin
      url: db.example.com
    state: present

- name: Generate a random password
  passwordstore:
    path: myapp/new-service
    generate: true
    length: 32
    state: present

- name: Delete a password
  passwordstore:
    path: myapp/old-service
    state: absent

- name: Use a custom password-store directory
  passwordstore:
    path: myapp/database
    passwordstore: /opt/password-store
    state: present
  register: result
```

{% endraw %}