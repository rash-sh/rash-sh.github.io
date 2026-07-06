---
title: podman
weight: 5142
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
| name              | true     | string  |                                                      | Name of the container.                                            |
| image             |          | string  |                                                      | Image to use for the container.                                   |
| state             |          | string  | absent<br>present<br>restarted<br>started<br>stopped | State of the container.                                           |
| env               |          | array   |                                                      | Environment variables as list of KEY=VALUE strings.               |
| env_dict          |          | object  |                                                      | Dictionary of environment variables.                              |
| ports             |          | array   |                                                      | Port mappings.                                                    |
| volumes           |          | array   |                                                      | Volume mappings.                                                  |
| networks          |          | array   |                                                      | Networks to connect to.                                           |
| memory            |          | string  |                                                      | Memory limit (e.g., "512m", "1g").                                |
| cpus              |          | string  |                                                      | Number of CPUs (e.g., "1.5").                                     |
| command           |          | array   |                                                      | Command to run in the container.                                  |
| entrypoint        |          | string  |                                                      | Entry point for the container.                                    |
| working_dir       |          | string  |                                                      | Working directory inside the container.                           |
| user              |          | string  |                                                      | User to run as inside the container.                              |
| restart_policy    |          | string  |                                                      | Restart policy (no, always, on-failure, unless-stopped).          |
| hostname          |          | string  |                                                      | Container hostname.                                               |
| privileged        |          | boolean |                                                      | Run container in privileged mode.                                 |
| interactive       |          | boolean |                                                      | Keep stdin open.                                                  |
| tty               |          | boolean |                                                      | Allocate a pseudo-TTY.                                            |
| auto_remove       |          | boolean |                                                      | Automatically remove the container when it exits.                 |
| capabilities_add  |          | array   |                                                      | List of capabilities to add.                                      |
| capabilities_drop |          | array   |                                                      | List of capabilities to drop.                                     |
| pull              |          | boolean |                                                      | Pull image before running.                                        |
| force             |          | boolean |                                                      | Force container removal on state=absent.                          |
| detach            |          | boolean |                                                      | Run container in detached mode (background).                      |
| systemd           |          | string  |                                                      | Configure systemd support in the container (true, false, always). |
| generate_systemd  |          | boolean |                                                      | Generate a systemd service unit for the container.                |

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