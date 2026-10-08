---
title: docker_container
weight: 5043
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
| name              | true     | string  |                                                      | Name of the container.                                   |
| image             |          | string  |                                                      | Image to use for the container.                          |
| state             |          | string  | absent<br>present<br>restarted<br>started<br>stopped | State of the container.                                  |
| env               |          | array   |                                                      | Environment variables.                                   |
| env_dict          |          | object  |                                                      | Dictionary of environment variables.                     |
| ports             |          | array   |                                                      | Port mappings.                                           |
| volumes           |          | array   |                                                      | Volume mappings.                                         |
| networks          |          | array   |                                                      | Networks to connect to.                                  |
| healthcheck       |          | object  |                                                      | Health check configuration.                              |
| memory            |          | string  |                                                      | Memory limit (e.g., "512m", "1g").                       |
| cpu_shares        |          | integer |                                                      | CPU shares (relative weight).                            |
| cpu_quota         |          | integer |                                                      | CPU quota in microseconds.                               |
| cpu_period        |          | integer |                                                      | CPU period in microseconds.                              |
| command           |          | array   |                                                      | Command to run in the container.                         |
| entrypoint        |          | string  |                                                      | Entry point for the container.                           |
| working_dir       |          | string  |                                                      | Working directory inside the container.                  |
| user              |          | string  |                                                      | User to run as inside the container.                     |
| restart_policy    |          | string  |                                                      | Restart policy (no, always, on-failure, unless-stopped). |
| hostname          |          | string  |                                                      | Container hostname.                                      |
| privileged        |          | boolean |                                                      | Run container in privileged mode.                        |
| interactive       |          | boolean |                                                      | Keep stdin open.                                         |
| tty               |          | boolean |                                                      | Allocate a pseudo-TTY.                                   |
| auto_remove       |          | boolean |                                                      | Automatically remove the container when it exits.        |
| capabilities_add  |          | array   |                                                      | List of capabilities to add.                             |
| capabilities_drop |          | array   |                                                      | List of capabilities to drop.                            |
| pull              |          | boolean |                                                      | Pull image before running.                               |
| force             |          | boolean |                                                      | Force container removal on state=absent.                 |
| detach            |          | boolean |                                                      | Run container in detached mode (background).             |

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