---
title: user
weight: 5188
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
| name        | true     | string  |                   | Name of the user to create, remove or modify.                                                                                        |
| state       |          | string  | absent<br>present | Whether the account should exist or not. **[default: `"present"`]**                                                                  |
| uid         |          | integer |                   | User ID of the user.                                                                                                                 |
| group       |          | string  |                   | Primary group name.                                                                                                                  |
| groups      |          | array   |                   | List of supplementary groups.                                                                                                        |
| append      |          | boolean |                   | If true, add the user to the groups specified in groups. If false, user will only be in the groups specified. **[default: `false`]** |
| home        |          | string  |                   | Home directory path.                                                                                                                 |
| create_home |          | boolean |                   | Create home directory if it doesn't exist. **[default: `true`]**                                                                     |
| shell       |          | string  |                   | Login shell path.                                                                                                                    |
| comment     |          | string  |                   | User description (GECOS field).                                                                                                      |
| system      |          | boolean |                   | Create as system user (uid < 1000). **[default: `false`]**                                                                           |
| password    |          | string  |                   | Encrypted password hash.                                                                                                             |
| remove      |          | boolean |                   | Remove home directory when state=absent. **[default: `false`]**                                                                      |

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