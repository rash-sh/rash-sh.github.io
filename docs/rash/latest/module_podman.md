---
title: podman
weight: 6330
indent: true
---

{% raw %}
# podman

Manage Podman containers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values                                               | Description                                                       |
|-------------------|----------|---------|------------------------------------------------------|-------------------------------------------------------------------|
| auto_remove       |          | boolean |                                                      | Automatically remove the container when it exits.                 |
| capabilities_add  |          | array   |                                                      | List of capabilities to add.                                      |
| capabilities_drop |          | array   |                                                      | List of capabilities to drop.                                     |
| command           |          | array   |                                                      | Command to run in the container.                                  |
| cpus              |          | string  |                                                      | Number of CPUs (e.g., "1.5").                                     |
| detach            |          | boolean |                                                      | Run container in detached mode (background).                      |
| entrypoint        |          | string  |                                                      | Entry point for the container.                                    |
| env               |          | array   |                                                      | Environment variables as list of KEY=VALUE strings.               |
| env_dict          |          | object  |                                                      | Dictionary of environment variables.                              |
| force             |          | boolean |                                                      | Force container removal on state=absent.                          |
| generate_systemd  |          | boolean |                                                      | Generate a systemd service unit for the container.                |
| hostname          |          | string  |                                                      | Container hostname.                                               |
| image             |          | string  |                                                      | Image to use for the container.                                   |
| interactive       |          | boolean |                                                      | Keep stdin open.                                                  |
| memory            |          | string  |                                                      | Memory limit (e.g., "512m", "1g").                                |
| name              | true     | string  |                                                      | Name of the container.                                            |
| networks          |          | array   |                                                      | Networks to connect to.                                           |
| ports             |          | array   |                                                      | Port mappings.                                                    |
| privileged        |          | boolean |                                                      | Run container in privileged mode.                                 |
| pull              |          | boolean |                                                      | Pull image before running.                                        |
| restart_policy    |          | string  |                                                      | Restart policy (no, always, on-failure, unless-stopped).          |
| state             |          | string  | absent<br>present<br>restarted<br>started<br>stopped | State of the container.                                           |
| systemd           |          | string  |                                                      | Configure systemd support in the container (true, false, always). |
| tty               |          | boolean |                                                      | Allocate a pseudo-TTY.                                            |
| user              |          | string  |                                                      | User to run as inside the container.                              |
| volumes           |          | array   |                                                      | Volume mappings.                                                  |
| working_dir       |          | string  |                                                      | Working directory inside the container.                           |

## Example

```yaml
- name: Start a container
  podman:
    name: myapp
    image: nginx:latest
    state: started

- name: Restart a container
  podman:
    name: myapp
    state: restarted

- name: Stop a container
  podman:
    name: myapp
    state: stopped

- name: Remove a container
  podman:
    name: myapp
    state: absent

- name: Create a container with ports and environment
  podman:
    name: webapp
    image: nginx:latest
    state: started
    ports:
      - "8080:80"
      - "443:443"
    env:
      - "NGINX_HOST=example.com"

- name: Create a container with volumes
  podman:
    name: dataapp
    image: alpine:latest
    state: started
    volumes:
      - "/host/path:/container/path"
      - "named_volume:/data"

- name: Create a container with resource limits
  podman:
    name: limited_app
    image: nginx:latest
    state: started
    memory: "512m"
    cpus: "1.5"

- name: Create a container connected to a network
  podman:
    name: networked_app
    image: nginx:latest
    state: started
    networks:
      - mynetwork

- name: Create a container with systemd integration
  podman:
    name: systemd_app
    image: nginx:latest
    state: started
    systemd: always
```

{% endraw %}