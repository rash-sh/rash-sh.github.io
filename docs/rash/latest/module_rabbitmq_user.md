---
title: rabbitmq_user
weight: 5970
indent: true
---

{% raw %}
# rabbitmq_user

Manage RabbitMQ users and permissions.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type   | Values            | Description                                                                                                    |
|----------------|----------|--------|-------------------|----------------------------------------------------------------------------------------------------------------|
| configure_priv |          | string |                   | Configure permissions regex pattern. **[default: `""`]**                                                       |
| password       |          | string |                   | Password for the user.                                                                                         |
| read_priv      |          | string |                   | Read permissions regex pattern. **[default: `""`]**                                                            |
| state          |          | string | present<br>absent | Whether the user should exist or not. **[default: `"present"`]**                                               |
| tags           |          |        |                   | User tags (administrator, management, monitoring, policymaker, etc). Can be a single string or a list of tags. |
| user           | true     | string |                   | Name of the RabbitMQ user to create, remove or modify.                                                         |
| vhost          |          | string |                   | RabbitMQ virtual host. **[default: `/`]**                                                                      |
| write_priv     |          | string |                   | Write permissions regex pattern. **[default: `""`]**                                                           |

## Example

```yaml
- name: Create a RabbitMQ user
  rabbitmq_user:
    user: myapp
    password: secret
    tags: management
    state: present

- name: Create user with administrator tag
  rabbitmq_user:
    user: admin
    password: adminpass
    tags: administrator
    state: present

- name: Set permissions for user on a vhost
  rabbitmq_user:
    user: myapp
    password: secret
    vhost: /myapp
    configure_priv: "^myapp-.*"
    write_priv: "^myapp-.*"
    read_priv: "^myapp-.*"
    state: present

- name: Create user with multiple tags
  rabbitmq_user:
    user: monitoring
    password: monpass
    tags:
      - monitoring
      - management
    state: present

- name: Delete a user
  rabbitmq_user:
    user: olduser
    state: absent

- name: Clear permissions for a user
  rabbitmq_user:
    user: myapp
    vhost: /
    configure_priv: ""
    write_priv: ""
    read_priv: ""
    state: present
```

{% endraw %}