---
title: docker_login
weight: 5047
indent: true
---

{% raw %}
# docker_login

Manage Docker registry authentication.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                       |
|-------------|----------|---------|-------------------|---------------------------------------------------|
| registry    |          | string  |                   | Registry URL (default: Docker Hub).               |
| username    |          | string  |                   | Username for authentication.                      |
| password    |          | string  |                   | Password for authentication.                      |
| email       |          | string  |                   | Email address for the registry account.           |
| state       |          | string  | present<br>absent | Desired state of the registry login.              |
| reauthorize |          | boolean |                   | Force re-authorization even if already logged in. |

## Example

```yaml
- name: Login to Docker Hub
  docker_login:
    username: myuser
    password: mypassword

- name: Login to private registry
  docker_login:
    registry: registry.example.com
    username: deploy
    password: "{{ registry_password }}"

- name: Login with email
  docker_login:
    registry: registry.example.com
    username: deploy
    password: "{{ registry_password }"
///     email: deploy@example.com
///
/// - name: Logout from Docker Hub
///   docker_login:
///     state: absent
///
/// - name: Logout from private registry
///   docker_login:
///     registry: registry.example.com
///     state: absent
///
/// - name: Re-authorize (force login even if already logged in)
///   docker_login:
///     registry: registry.example.com
///     username: deploy
///     password: "{{ registry_password }}"
///     reauthorize: true
/// ```}

{% endraw %}