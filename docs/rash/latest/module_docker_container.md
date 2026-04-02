---
title: docker_container
weight: 5270
indent: true
---

{% raw %}
# docker_container

Manage Docker containers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values                                               | Description                                              |
|-------------------|----------|---------|------------------------------------------------------|----------------------------------------------------------|
| auto_remove       |          | boolean |                                                      | Automatically remove the container when it exits.        |
| capabilities_add  |          | array   |                                                      | List of capabilities to add.                             |
| capabilities_drop |          | array   |                                                      | List of capabilities to drop.                            |
| command           |          | array   |                                                      | Command to run in the container.                         |
| cpu_period        |          | integer |                                                      | CPU period in microseconds.                              |
| cpu_quota         |          | integer |                                                      | CPU quota in microseconds.                               |
| cpu_shares        |          | integer |                                                      | CPU shares (relative weight).                            |
| detach            |          | boolean |                                                      | Run container in detached mode (background).             |
| entrypoint        |          | string  |                                                      | Entry point for the container.                           |
| env               |          | array   |                                                      | Environment variables.                                   |
| env_dict          |          | object  |                                                      | Dictionary of environment variables.                     |
| force             |          | boolean |                                                      | Force container removal on state=absent.                 |
| healthcheck       |          | object  |                                                      | Health check configuration.                              |
| hostname          |          | string  |                                                      | Container hostname.                                      |
| image             |          | string  |                                                      | Image to use for the container.                          |
| interactive       |          | boolean |                                                      | Keep stdin open.                                         |
| memory            |          | string  |                                                      | Memory limit (e.g., "512m", "1g").                       |
| name              | true     | string  |                                                      | Name of the container.                                   |
| networks          |          | array   |                                                      | Networks to connect to.                                  |
| ports             |          | array   |                                                      | Port mappings.                                           |
| privileged        |          | boolean |                                                      | Run container in privileged mode.                        |
| pull              |          | boolean |                                                      | Pull image before running.                               |
| restart_policy    |          | string  |                                                      | Restart policy (no, always, on-failure, unless-stopped). |
| state             |          | string  | absent<br>present<br>restarted<br>started<br>stopped | State of the container.                                  |
| tty               |          | boolean |                                                      | Allocate a pseudo-TTY.                                   |
| user              |          | string  |                                                      | User to run as inside the container.                     |
| volumes           |          | array   |                                                      | Volume mappings.                                         |
| working_dir       |          | string  |                                                      | Working directory inside the container.                  |

## Example

```yaml
- name: Start a container
  docker_container:
    name: myapp
    image: nginx:latest
    state: started

- name: Stop a container
  docker_container:
    name: myapp
    state: stopped

- name: Restart a container
  docker_container:
    name: myapp
    state: restarted

- name: Remove a container
  docker_container:
    name: myapp
    state: absent

- name: Create a container with ports and environment
  docker_container:
    name: webapp
    image: nginx:latest
    state: started
    ports:
      - "8080:80"
      - "443:443"
    env:
      NGINX_HOST: example.com

- name: Create a container with volumes
  docker_container:
    name: dataapp
    image: alpine:latest
    state: started
    volumes:
      - "/host/path:/container/path"
      - "named_volume:/data"

- name: Create a container with health check
  docker_container:
    name: healthy_app
    image: nginx:latest
    state: started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3

- name: Create a container with resource limits
  docker_container:
    name: limited_app
    image: nginx:latest
    state: started
    memory: "512m"
    cpu_shares: 512

- name: Create a container connected to a network
  docker_container:
    name: networked_app
    image: nginx:latest
    state: started
    networks:
      - mynetwork
```

{% endraw %}