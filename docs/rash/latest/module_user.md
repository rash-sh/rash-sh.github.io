---
title: user
weight: 6330
indent: true
---

{% raw %}
# user

Manage user accounts and user attributes.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                                                                                          |
|-------------|----------|---------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| append      |          | boolean |                   | If true, add the user to the groups specified in groups. If false, user will only be in the groups specified. **[default: `false`]** |
| comment     |          | string  |                   | User description (GECOS field).                                                                                                      |
| create_home |          | boolean |                   | Create home directory if it doesn't exist. **[default: `true`]**                                                                     |
| group       |          | string  |                   | Primary group name.                                                                                                                  |
| groups      |          | array   |                   | List of supplementary groups.                                                                                                        |
| home        |          | string  |                   | Home directory path.                                                                                                                 |
| name        | true     | string  |                   | Name of the user to create, remove or modify.                                                                                        |
| password    |          | string  |                   | Encrypted password hash.                                                                                                             |
| remove      |          | boolean |                   | Remove home directory when state=absent. **[default: `false`]**                                                                      |
| shell       |          | string  |                   | Login shell path.                                                                                                                    |
| state       |          | string  | absent<br>present | Whether the account should exist or not. **[default: `"present"`]**                                                                  |
| system      |          | boolean |                   | Create as system user (uid < 1000). **[default: `false`]**                                                                           |
| uid         |          | integer |                   | User ID of the user.                                                                                                                 |

## Example

```yaml
- user:
    name: johnd
    comment: John Doe
    uid: 1040
    group: admin
    shell: /bin/bash

- user:
    name: myservice
    system: yes
    create_home: no
    shell: /sbin/nologin

- user:
    name: james
    groups:
      - docker
      - wheel
    append: yes

- user:
    name: olduser
    state: absent
    remove: yes
```

{% endraw %}