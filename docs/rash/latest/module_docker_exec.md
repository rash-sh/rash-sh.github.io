---
title: docker_exec
weight: 5420
indent: true
---

{% raw %}
# docker_exec

Execute commands inside running Docker containers.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                |
|-----------|----------|---------|--------|----------------------------------------------------------------------------|
| command   | true     | string  |        | Command to execute inside the container.                                   |
| container | true     | string  |        | Container name or ID.                                                      |
| detach    |          | boolean |        | Run command in the background (detached mode).                             |
| env       |          | object  |        | Environment variables as a dictionary.                                     |
| stdin     |          | boolean |        | Keep STDIN open even if not attached.                                      |
| tty       |          | boolean |        | Allocate a pseudo-TTY.                                                     |
| user      |          | string  |        | User to run the command as (e.g., "user", "uid", "user:group", "uid:gid"). |
| workdir   |          | string  |        | Working directory inside the container.                                    |

## Example

```yaml
- name: Run a simple command in a container
  docker_exec:
    container: myapp
    command: ls /app

- name: Run script in container as specific user
  docker_exec:
    container: myapp
    command: /scripts/update.sh
    user: appuser
    workdir: /app

- name: Run command with environment variables
  docker_exec:
    container: webapp
    command: env
    env:
      DEBUG: "true"
      LOG_LEVEL: info

- name: Run interactive command with TTY
  docker_exec:
    container: myapp
    command: /bin/bash
    tty: true
    stdin: true

- name: Run command in background
  docker_exec:
    container: myapp
    command: /scripts/background_task.sh
    detach: true
```

{% endraw %}